import NavBar from "../../components/NavBar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import styles from '../../styles/dashboard.module.css'

import { useEffect, useState } from "react"

import Head from "next/head"

export async function getStaticPaths() {
    return {
      paths: [{ params: { videoid: 'home'} }],
      fallback: 'blocking',     // can also be true or 'blocking'
    }
  }

export async function getStaticProps(context) {
    return {
        props: { videoid: context.params.videoid },
    };
}

export default function VideoPage(props) {
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
            <NavBar theme={theme} setTheme={setTheme} 
            sideExpanded={sideExpanded} setSideExpanded={setSideExpanded}/>
          </div>
          <div className={styles.sideBarWithMain} >
            <Sidebar theme={theme} setTheme={setTheme} 
            sideExpanded={sideExpanded}/>

            {/* videos series goes here */}


          </div>
        </div>
      </main>


    </div>
  );
}
