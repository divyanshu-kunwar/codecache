import NavBar from "../../components/NavBar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "../../styles/dashboard.module.css";
import playerStyle from "./videoPlayer.module.css";
import codeIcon from "../../media/icons/code.svg";


import ReactPlayer from "react-player";
import supabase from "../../utils/supabase";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Prism from '../../utils/prism'
import { Component, useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";

async function getMdxCode(videoId) {
  const { data: mdxData, error: mdxError } = await supabase.storage
    .from("markdowns")
    .download(`videos/${videoId}.md`);

  // convert the blob to text
  const mdxText = await mdxData.text();
  //serialize the mdx text
  const mdxSource = await serialize(mdxText, {
    mdxOptions: { development: false },
  });

  return mdxSource;
}

export async function getStaticPaths() {
  // get data from supabase database named : videosList and get the id of all the videos
  const { data, error } = await supabase.from("VideosList").select("videoId");

  const paths = data.map((item) => {
    return {
      params: { videoId: item.videoId },
    };
  });

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  // get the data from supabase
  const { data, error } = await supabase
    .from("VideosList")
    .select("*")
    .eq("videoId", context.params.videoId);

  // if data is empty or error is not null then return 404
  if (data.length === 0 || error !== null) {
    return {
      notFound: true,
    };
  }

  // get the data from /api/fetchVideoDetails?videoId=videoId
  const response = await fetch(
    `https://codecache.vercel.app/api/fetchVideoDetails?videoId=${context.params.videoId}`
  );
  const videoData = await response.json();

  // getMdxCode(context.params.videoId).then((res)=>{
  //   console.log(res)
  // })

  const mdxSource = await getMdxCode(context.params.videoId);

  return {
    props: {
      videoid: context.params.videoId,
      data: data,
      videoData: videoData,
      mdxSource: mdxSource,
    },
    revalidate: 30,
  };
}



export default function VideoPage(props) {

const components = { pre : (props) => {

  const code = props.children.props.children;

  // get language from class name
  const language = props.children.props.className.split("-")[1];

  // get name of the language that prism supports
  const HTML = Prism.highlight(code, Prism.languages[language], language);
  return (
    <pre {...props}>
      <code dangerouslySetInnerHTML={{ __html: HTML }} />
    </pre>
  );

}}

  const [theme, setTheme] = useState("dark");
  const [sideExpanded, setSideExpanded] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
    if (sessionStorage.getItem("theme") === "light") {
      setTheme("light");
    } else {
      sessionStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, []);
  return (
    <div>
      <Head>
        <title>{props.videoData.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="some description here" />
        <link
          rel="icon"
          href="/favicon_light.png"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main style={{ overflowY: "hidden" }}>
        <div className={styles.dashboardContainer}>
          <div>
            <NavBar
              theme={theme}
              setTheme={setTheme}
              sideExpanded={sideExpanded}
              setSideExpanded={setSideExpanded}
            />
          </div>
          <div className={styles.sideBarWithMain}>
            <Sidebar
              theme={theme}
              setTheme={setTheme}
              sideExpanded={sideExpanded}
            />
            <div className={playerStyle.mainContainer}>
              <div className={playerStyle.youtubeContainer}>
                <div className={playerStyle.reactPlayerContainer}>
                  {hasWindow && (
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${props.videoid}`}
                      controls={true}
                      playing={true}
                      light={true || props.videoData.thumbnail}
                      width="100%"
                      height="100%"
                      config={{
                        youtube: {
                          playerVars: {
                            showinfo: 0,
                            modestbranding: 1,
                            rel: 0,
                            color: "red",
                          },
                        },
                      }}
                    />
                  )}
                </div>

                <div className={playerStyle.content_detail}>
                  <div className={playerStyle.content_detail_2}>


                    <div className={playerStyle.ribbons}>
                      <Link
                        className={playerStyle.youtubeStats}
                        href={`https://www.youtube.com/watch?v=${props.videoData.id}`}
                      >
                        <span>Youtube Stats</span>
                        <span> {props.videoData.likeCount} Likes</span>
                        <span> {props.videoData.viewCount} Views</span>
                      </Link>

                      <div className={playerStyle.codeBtn}>
                        <span>Get {"<CODE/>"}</span>
                      </div>
                    </div>

                    {props.videoData.title && (
                      <h1 className={playerStyle.videoTitle}>
                        {props.videoData.title}
                      </h1>
                    )}

                    <div id="mdxContainer"
                      className={playerStyle.mdxContainer}>
                      {/* props.mdxSource has mdx code Render it */}

                      {/* props  */}

                      <MDXRemote  {...props.mdxSource} components={components}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
