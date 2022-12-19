import Hero from "./Hero/Hero";
import styles from "./home.module.css";
import Image from "next/image";

import playtime from "../../media/icons/playtime.svg";
import viewsIcon from "../../media/icons/views.svg";

export default function DashHome(props) {
  return (
    <div className={styles.mainArea}>
      <Hero />

      <div className={styles.newLearningSeries}>
        <div className={styles.head}>New Learning Series</div>

        <div className={styles.horizontalGallery}>

          <div className={styles.seriesContainer}>
            <div className={styles.imageSeriesContainer}></div>

            <div className={styles.seriesStats}>
              <div className={styles.playtimeStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={playtime}
                  alt="playtime"
                />
                <span>5K+</span>
              </div>
              <div className={styles.viewStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={viewsIcon}
                  alt="views"
                />
                <span>45:00</span>
              </div>
            </div>
            <div className={styles.seriesHead}>Scapy Tutorial</div>
            <div className={styles.seriesInfo}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia ...
            </div>
          </div>

          <div className={styles.seriesContainer}>
            <div className={styles.imageSeriesContainer}></div>

            <div className={styles.seriesStats}>
              <div className={styles.playtimeStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={playtime}
                  alt="playtime"
                />
                <span>5K+</span>
              </div>
              <div className={styles.viewStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={viewsIcon}
                  alt="views"
                />
                <span>45:00</span>
              </div>
            </div>
            <div className={styles.seriesHead}>Scapy Tutorial</div>
            <div className={styles.seriesInfo}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia ...
            </div>
          </div>

          <div className={styles.seriesContainer}>
            <div className={styles.imageSeriesContainer}></div>

            <div className={styles.seriesStats}>
              <div className={styles.playtimeStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={playtime}
                  alt="playtime"
                />
                <span>5K+</span>
              </div>
              <div className={styles.viewStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={viewsIcon}
                  alt="views"
                />
                <span>45:00</span>
              </div>
            </div>
            <div className={styles.seriesHead}>Scapy Tutorial</div>
            <div className={styles.seriesInfo}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia ...
            </div>
          </div>

          <div className={styles.seriesContainer}>
            <div className={styles.imageSeriesContainer}></div>

            <div className={styles.seriesStats}>
              <div className={styles.playtimeStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={playtime}
                  alt="playtime"
                />
                <span>5K+</span>
              </div>
              <div className={styles.viewStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={viewsIcon}
                  alt="views"
                />
                <span>45:00</span>
              </div>
            </div>
            <div className={styles.seriesHead}>Scapy Tutorial</div>
            <div className={styles.seriesInfo}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia ...
            </div>
          </div>

          <div className={styles.seriesContainer}>
            <div className={styles.imageSeriesContainer}></div>

            <div className={styles.seriesStats}>
              <div className={styles.playtimeStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={playtime}
                  alt="playtime"
                />
                <span>5K+</span>
              </div>
              <div className={styles.viewStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={viewsIcon}
                  alt="views"
                />
                <span>45:00</span>
              </div>
            </div>
            <div className={styles.seriesHead}>Scapy Tutorial</div>
            <div className={styles.seriesInfo}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia ...
            </div>
          </div>

        </div>
      </div>

      <div className={styles.newVideosSection}>
        <div className={styles.head}>New Videos</div>

        <div className={styles.horizontalGallery}>
          
          <div className={styles.seriesContainer}>
            <div className={styles.imageSeriesContainer}></div>

            <div className={styles.seriesStats}>
              <div className={styles.playtimeStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={playtime}
                  alt="playtime"
                />
                <span>5K+</span>
              </div>
              <div className={styles.viewStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={viewsIcon}
                  alt="views"
                />
                <span>45:00</span>
              </div>
            </div>
            <div className={styles.seriesHead}>Scapy Tutorial</div>
          </div>

          <div className={styles.seriesContainer}>
            <div className={styles.imageSeriesContainer}></div>

            <div className={styles.seriesStats}>
              <div className={styles.playtimeStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={playtime}
                  alt="playtime"
                />
                <span>5K+</span>
              </div>
              <div className={styles.viewStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={viewsIcon}
                  alt="views"
                />
                <span>45:00</span>
              </div>
            </div>
            <div className={styles.seriesHead}>Scapy Tutorial</div>
          </div>

          <div className={styles.seriesContainer}>
            <div className={styles.imageSeriesContainer}></div>

            <div className={styles.seriesStats}>
              <div className={styles.playtimeStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={playtime}
                  alt="playtime"
                />
                <span>5K+</span>
              </div>
              <div className={styles.viewStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={viewsIcon}
                  alt="views"
                />
                <span>45:00</span>
              </div>
            </div>
            <div className={styles.seriesHead}>Scapy Tutorial</div>
          </div>

          <div className={styles.seriesContainer}>
            <div className={styles.imageSeriesContainer}></div>

            <div className={styles.seriesStats}>
              <div className={styles.playtimeStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={playtime}
                  alt="playtime"
                />
                <span>5K+</span>
              </div>
              <div className={styles.viewStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={viewsIcon}
                  alt="views"
                />
                <span>45:00</span>
              </div>
            </div>
            <div className={styles.seriesHead}>Scapy Tutorial</div>
          </div>

          <div className={styles.seriesContainer}>
            <div className={styles.imageSeriesContainer}></div>

            <div className={styles.seriesStats}>
              <div className={styles.playtimeStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={playtime}
                  alt="playtime"
                />
                <span>5K+</span>
              </div>
              <div className={styles.viewStats}>
                <Image
                  class={props.theme == "dark" && styles.statsIconDark}
                  src={viewsIcon}
                  alt="views"
                />
                <span>45:00</span>
              </div>
            </div>
            <div className={styles.seriesHead}>Scapy Tutorial</div>
          </div>

        </div>
      </div>

      <div className={styles.shortVideosSection}>
        <div className={styles.head}>New Shorts</div>

        <div className={styles.horizontalGallery}>

          <div className={styles.shortsSeriesContainer}>
            <div className={styles.imageShortsContainer}></div>
            <div className={styles.seriesShortsHead}>Scapy Tutorial</div>
          </div>

          <div className={styles.shortsSeriesContainer}>
            <div className={styles.imageShortsContainer}></div>
            <div className={styles.seriesShortsHead}>Scapy Tutorial</div>
          </div>

          <div className={styles.shortsSeriesContainer}>
            <div className={styles.imageShortsContainer}></div>
            <div className={styles.seriesShortsHead}>Scapy Tutorial</div>
          </div>

          <div className={styles.shortsSeriesContainer}>
            <div className={styles.imageShortsContainer}></div>
            <div className={styles.seriesShortsHead}>Scapy Tutorial</div>
          </div>

          <div className={styles.shortsSeriesContainer}>
            <div className={styles.imageShortsContainer}></div>
            <div className={styles.seriesShortsHead}>Scapy Tutorial</div>
          </div>

          <div className={styles.shortsSeriesContainer}>
            <div className={styles.imageShortsContainer}></div>
            <div className={styles.seriesShortsHead}>Scapy Tutorial</div>
          </div>

          <div className={styles.shortsSeriesContainer}>
            <div className={styles.imageShortsContainer}></div>
            <div className={styles.seriesShortsHead}>Scapy Tutorial</div>
          </div>

        </div>
      </div>
    </div>
  );
}
