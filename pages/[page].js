import NavBar from "../components/NavBar/Navbar";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

import Sidebar from "../components/Sidebar/Sidebar";
import bg from "../media/Home.jpg";
import DashHome from "../components/Home/DashHome";
import styles from "../styles/dashboard.module.css";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { page: "home" } },
      { params: { page: "Series_list" } },
      { params: { page: "Videos_list" } },
      { params: { page: "Shorts_list" } },
      { params: { page: "buymeacoffee" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const { data, error } = await supabase.from("DashBoard").select("*");

  // get the data from supabase
  const playlistId = [];
  const chapterLength = [];
  data.map((item) => {
    playlistId.push(item.id);
    chapterLength.push(item.PlaybackTime);
  });

  const { data: contData, error: contError } = await supabase
    .from("Contributors")
    .select("*");
  const contributor_5_names = [];
  contData.map((item) => {
    contributor_5_names.push(item.name);
  });

  // get all the playlist data from the api
  // comment for change
  const res =
  await fetch(`https://codecache.vercel.app/api/fetchHomePlaylist?playlistId=${playlistId}&chapterLength=${chapterLength}`);
  const seriesData = await res.json();

  const res2 = 
  await fetch(`https://codecache.vercel.app/api/fetchPlaylistDetail?playlistId=${process.env.HOME_VIDEOS}`);
  const videosData = await res2.json();

  const res3 = 
  await fetch(`https://codecache.vercel.app/api/fetchPlaylistDetail?playlistId=${process.env.HOME_SHORTS}`);
  const shortsData = await res3.json();

  let data_ = {
    "" : {
      id:"home",
      title: "Home",
      seriesData: seriesData,
      videosData: videosData.videos,
      shortsData: shortsData.videos,
      contributor_5_names: contributor_5_names,
    },
    "home":{
      id:"home",
      title: "Home",
      seriesData: seriesData,
      videosData: videosData.videos,
      shortsData: shortsData.videos,
      contributor_5_names: contributor_5_names,
    },
    "Series_list":{
      id:"Series_list",
      title:"Learning PlayList"
    },
    "Videos_list":{
      id:"Videos_list",
      title:"Videos List"
    },
    "Shorts_list":{
      id:"Shorts_list",
      title:"Shorts List"
    },
    "buymeacoffee":{
      id:"buymeacoffee",
      title:"Supporters ❤️"
    },

  };

  return {
    props: {
      data : data_[context.params.page]
    },
  };
}

export default function Home(props) {
  const [theme, setTheme] = useState("dark");
  const [sideExpanded, setSideExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

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
        <title>{props.data.title}</title>
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
        {/* <Image
          src={bg}
          alt="bg"
          style={{
            width: "100%",
            opacity: "0.2",
            objectFit: "contain",
            objectPosition: "top",
            position: "absolute",
            zIndex: "-2",
          }}
        /> */}

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

            {/* {console.log(props.data)} */}

          {
            props.data.id==='home' && 
            <DashHome
              theme={theme}
              seriesData={props.data.seriesData}
              videosData={props.data.videosData}
              shortsData={props.data.shortsData}
              contributors={props.data.contributor_5_names}
            />
          }
          
          {
            props.data.id === 'Series_list' && 
            <div>Series List</div>
          }

          {
            props.data.id === 'Videos_list' && 
            <div>Video List</div>
          }
          
          {
            props.data.id === 'Shorts_list' && 
            <div>Shorts List</div>
          }

          {
            props.data.id === 'buymeacoffee' && 
            <div>Buy me a coffee</div>
          }

          </div>
        </div>
      </main>
    </div>
  );
}

