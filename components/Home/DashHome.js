import Hero from "./Hero/Hero";
import styles from "./home.module.css";
import Image from "next/image";

import VideoContainer from "./VideoContainer/VideoContainer";



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
                    Playtime={'2.5 hrs'}
                    VideoCount={'45'}
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
                    Playtime={'2.5 hrs'}
                    VideoId={videos.VideoId}
                  />
                )
              })
            }
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
