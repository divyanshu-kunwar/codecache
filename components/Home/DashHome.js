import Hero from "./Hero/Hero";
import styles from "./home.module.css";
import Image from "next/image";

import VideoContainer from "./VideoContainer/VideoContainer";

import DSAVisualImg from "../../media/tools/DSAvisuals.png";



export default function DashHome(props) {

  return (
    <div className={styles.mainArea}>
      <div></div>
      <Hero />



      <div className={styles.newLearningSeries}>
        <div className={styles.head}>New Learning Series</div>

        <div className={styles.horizontalGallery}>
            {
              (props.seriesData).map((series) => {
                return(
                  <VideoContainer
                    key={series.VideoId}
                    theme={props.theme}
                    Type="series"
                    Image={series.ImgUrl}
                    Title={series.Title}
                    Description={series.Description}
                    Playtime={series.length}
                    VideoCount={series.chapters}
                    VideoId={series.VideoId}
                  />
                )
              })
            }
        </div>
      </div>


      
      <div className={styles.newVideosSection}>
        <div className={styles.head}>New Videos</div>

        <div className={styles.horizontalGallery}>
        {
              (props.videosData).map((videos) => {
                return(
                  <VideoContainer
                    key={videos.VideoId}
                    theme={props.theme}
                    Type="videos"
                    Image={videos.ImgUrl}
                    Title={videos.Title}
                    Playtime={videos.length}
                    VideoId={videos.VideoId}
                  />
                )
              })
            }
        </div>
      
      </div>

      <div className={styles.tools}>
        <div className={styles.head}>Learning Tools</div>
        <div className={styles.horizontalGallery}>
          <VideoContainer
                      theme={props.theme}
                      Type="tools"
                      Image={DSAVisualImg}
                      Title="Data Structure And Algorithm Visualization"
                      Description="Learn data structures and algorithms with the help of tools powered by P5JS."
                      ToolHref="https://kunwar-divyanshu.github.io/DSAVisuals/"
                    />
      </div>
      </div>

      <div className={styles.shortVideosSection}>
        <div className={styles.head}>New Shorts</div>

        <div className={styles.horizontalGallery}>
        {
              (props.shortsData).map((short) => {
                return(
                  <VideoContainer
                    key={short.VideoId}
                    theme={props.theme}
                    Type="shorts"
                    Image={short.ImgUrl}
                    Title={short.Title}
                    VideoId={short.VideoId}
                  />
                )
              })
            }
        </div>
      </div>



    </div>
  );
}
