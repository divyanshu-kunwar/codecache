import NavBar from "../../components/NavBar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import styles from '../../styles/dashboard.module.css'

import playerStyle from './videoPlayer.module.css'

import ReactPlayer from "react-player"

import { useEffect, useState } from "react"

import Head from "next/head"

export async function getStaticPaths() {
    return {
      paths: [{ params: { videoId: 'home'} }],
      fallback: 'blocking',     // can also be true or 'blocking'
    }
  }

export async function getStaticProps(context) {
    return {
        props: { videoid: context.params.videoId },
    };
}

export default function VideoPage(props) {
  const [theme, setTheme] = useState("dark");
  const [sideExpanded, setSideExpanded] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

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
            <NavBar theme={theme} setTheme={setTheme} 
            sideExpanded={sideExpanded} setSideExpanded={setSideExpanded}/>
          </div>
          <div className={styles.sideBarWithMain} >
            <Sidebar theme={theme} setTheme={setTheme} 
            sideExpanded={sideExpanded}/>
          <div className={playerStyle.youtubeContainer}>

            {
              hasWindow && 
              <ReactPlayer
              url={`https://www.youtube.com/watch?v=${props.videoid}`}
              width="100%"
              height="100%"
              controls={true}
              playing={true}
              light={true}
              config={{
                youtube: {
                  playerVars: { showinfo: 0 , modestbranding:1 , rel:0 , color:"red"},
                },
              }}
            />
            }

          </div>
          </div>
        </div>
      </main>


    </div>
  );
}
