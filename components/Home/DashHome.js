import Hero from "./Hero/Hero";
import styles from "./home.module.css";

import VideoContainer from "./VideoContainer/VideoContainer";

import DSAVisualImg from "../../media/tools/DSAvisuals.png";



export default function DashHome(props) {

  return (
    <div className={styles.mainArea}>
      <div></div>
      <Hero 
      contributors={props.contributors}/>


      <div className={styles.newLearningSeries}>
        <div className={styles.head}>New Learning Playlist</div>

        <div className={styles.horizontalGallery}>
            {
              (props.seriesData).map((series) => {
                return(
                  <VideoContainer
                    key={series.id}
                    theme={props.theme}
                    Type="series"
                    Image={series.thumbnail}
                    Title={series.title}
                    Description={series.description}
                    Playtime={series.chapterLength}
                    VideoCount={series.noOfVideos}
                    VideoId={series.id}
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
                    key={videos.id}
                    theme={props.theme}
                    Type="videos"
                    Image={videos.thumbnail}
                    Title={videos.title}
                    Playtime={videos.playtime}
                    VideoId={videos.id}
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
                    key={short.id}
                    theme={props.theme}
                    Type="shorts"
                    Image={short.thumbnail}
                    Title={short.title}
                    VideoId={short.id}
                    Playtime={short.playtime}
                  />
                )
              })
            }
        </div>
      </div>

    </div>
  );
}
