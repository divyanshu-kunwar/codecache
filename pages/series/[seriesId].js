import NavBar from "../../components/NavBar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "../../styles/dashboard.module.css";

import styles_ from "./series.module.css";

import { useEffect, useState } from "react";

import Head from "next/head";
import VideoContainer from "../../components/Home/VideoContainer/VideoContainer";
import Image from "next/image";
import playtime from "../../media/icons/playtime.svg";

import supabase from "../../utils/supabase";

export async function getStaticPaths() {
  const { data, error } = await supabase.from("SeriesList").select("seriesId");

  const paths = data.map((item) => {
    return {
      params: { seriesId: item.seriesId },
    };
  });

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {

  const res = await fetch(`https://codecache.vercel.app/api/fetchPlaylistDetail?playlistId=${context.params.seriesId}`);
  const res2 = await fetch(`https://codecache.vercel.app/api/fetchHomePlaylist?playlistId=${context.params.seriesId}&chapterLength=12`);

  const data = await res.json();
  const data2 = await res2.json();



  const { data:seriesData, error } = await supabase
  .from("SeriesList")
  .select("*")
  .eq("seriesId", context.params.seriesId);

  if (seriesData.length === 0 || error !== null) {
    return {
      notFound: true,
    };
  }



  return {
    props: {
      seriesId: context.params.seriesId,
      playlist: data,
      series: data2[0],
    },
}



}

export default function SeriesPage(props) {
  const [theme, setTheme] = useState("dark");
  const [sideExpanded, setSideExpanded] = useState(false);

  useEffect(() => {
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
        <title>{props.series.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={props.series.description} />
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

            {/* videos series goes here */}
            <div className={styles_.main}>
              <h2>{props.series.title}</h2>
              <div className={styles_.main2}>
                <div className={styles_.seriesInfo}>
                  <div className={styles_.seriesInfo__left}>
                    <Image
                      src={props.series.thumbnail}
                      alt={props.series.title}
                      width="320"
                      height="180"
                    />

                    <div className={styles_.stats}>
                      <div>
                        <Image
                          className={theme == "dark" && styles_.statsIconDark}
                          src={playtime}
                          alt="playtime"
                        />
                        {/* format integer time in required format */}
                        <span>
                          {props.playlist.totalPlaytime < 60
                            ? props.playlist.totalPlaytime + "sec"
                            : props.playlist.totalPlaytime < 3600
                            ? Math.floor(props.playlist.totalPlaytime / 60) +
                              "m " +
                              (props.playlist.totalPlaytime % 60) +
                              "s"
                            : Math.floor(props.playlist.totalPlaytime / 3600) +
                              "h " +
                              Math.floor((props.playlist.totalPlaytime % 3600) / 60) +
                              "m"}
                        </span>
                      </div>

                      <div className={styles.viewStats}>
                        <span>{props.playlist.totalVideos} Chapters</span>
                      </div>
                    </div>

                    <h3>About This Series</h3>
                    <p>
                      {props.series.description}
                    </p>

                    <div className={styles_.codeBtn}>
                      <span>Get {"<CODE/>"}</span>
                      {/* TODO */}
                    </div>
                  </div>
                </div>
                <div className={styles_.videoGrid}>

                  {props.playlist.videos.map((video) => {
                    return (
                      <VideoContainer
                        key={video.id}
                        theme={theme}
                        Type="videos"
                        VideoId={video.id}
                        Title={video.title}
                        Playtime={video.playtime}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
