import NavBar from "../../components/NavBar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "../../styles/dashboard.module.css";

import styles_ from "./series.module.css";

import { useEffect, useState } from "react";

import Head from "next/head";
import VideoContainer from "../../components/Home/VideoContainer/VideoContainer";
import Image from "next/image";
import playtime from "../../media/icons/playtime.svg";

export async function getStaticPaths() {
  
  // get 

  return {
    paths: [{ params: { videoId: "home" } }],
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  return {
    props: { videoid: context.params.videoId },
  };
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
        <title>{props.videoid}</title>
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

            {/* videos series goes here */}

            <div className={styles_.main}>
              <h2>Series Name</h2>
              <div className={styles_.main2}>
                <div className={styles_.seriesInfo}>
                  <div className={styles_.seriesInfo__left}>
                    <Image
                      src="https://i.ytimg.com/vi/2-Ayb4GGwbY/maxresdefault.jpg"
                      alt=""
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
                          {props.Playtime < 60
                            ? props.Playtime + "sec"
                            : props.Playtime < 3600
                            ? Math.floor(props.Playtime / 60) +
                              "m " +
                              (props.Playtime % 60) +
                              "s"
                            : Math.floor(props.Playtime / 3600) +
                              "h " +
                              Math.floor((props.Playtime % 3600) / 60) +
                              "m"}
                        </span>
                      </div>

                      <div className={styles.viewStats}>
                        <span>{props.VideoCount} Chapters</span>
                      </div>
                    </div>

                    <h3>About This Series</h3>
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>

                    <div className={styles_.codeBtn}>
                      <span>Get {"<CODE/>"}</span>
                    </div>
                  </div>
                </div>
                <div className={styles_.videoGrid}>
                  <VideoContainer
                    theme={theme}
                    Type="videos"
                    VideoId="2-Ayb4GGwbY"
                    Title="How to use the console in Chrome"
                    Playtime={40}
                  />
                  <VideoContainer
                    theme={theme}
                    Type="videos"
                    VideoId="2-Ayb4GGwbY"
                    Title="How to use the console in Chrome"
                    Playtime={40}
                  />
                  {/* <VideoContainer
                    theme={theme}
                    Type="videos"
                    VideoId="2-Ayb4GGwbY"
                    Title="How to use the console in Chrome"
                    Playtime={40}
                  />
                  <VideoContainer
                    theme={theme}
                    Type="videos"
                    VideoId="2-Ayb4GGwbY"
                    Title="How to use the console in Chrome"
                    Playtime={40}
                  />
                  <VideoContainer
                    theme={theme}
                    Type="videos"
                    VideoId="2-Ayb4GGwbY"
                    Title="How to use the console in Chrome"
                    Playtime={40}
                  />
                  <VideoContainer
                    theme={theme}
                    Type="videos"
                    VideoId="2-Ayb4GGwbY"
                    Title="How to use the console in Chrome"
                    Playtime={40}
                  />
                  <VideoContainer
                    theme={theme}
                    Type="videos"
                    VideoId="2-Ayb4GGwbY"
                    Title="How to use the console in Chrome"
                    Playtime={40}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
