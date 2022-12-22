import { useRouter } from "next/router";
import Image from "next/image";
import styles from './VideoContainer.module.css'

import playtime from "../../../media/icons/playtime.svg";
import viewsIcon from "../../../media/icons/views.svg";

export default function VideoContainer(props){

  const router = useRouter()

    return(
        <div className={props.Type==='shorts' ? styles.shortsContainer : styles.seriesContainer}
        onClick={()=>{
          router.push(`${props.Type}/${props.VideoId}`)
        }}>

        <div className={props.Type==='shorts' ? styles.imageShortsContainer : styles.imageSeriesContainer}>
            {
            props.Type === 'shorts' && 
            <Image src={props.Image} alt={props.Title + " Thumbnail"} 
            width='350'
            height='100'/>
            }
            {
            (props.Type === 'series' || props.Type==='videos') && 
            <Image src={props.Image} alt={props.Title + " Thumbnail"} 
            width='350'
            height='100'/>
            }
        
        </div>

        <div className={props.Type==='shorts'? styles.displayNone : styles.seriesStats}>
          <div className={styles.playtimeStats}>
            <Image
              className={props.theme == "dark" && styles.statsIconDark}
              src={playtime}
              alt="playtime"
            />
            <span>{props.Playtime}</span>
          </div>
         { props.Type==='series' &&
          <div className={styles.viewStats}>
            <span>{props.VideoCount} Chapters</span>
          </div>}
        </div>
        <div className={props.Type==="shorts" ? styles.shortsHead: styles.seriesHead}>{props.Title}</div>
        <div className={(props.Type==='shorts' || props.Type==='videos' )? styles.displayNone : styles.seriesInfo}>
          {props.Description}
        </div>
      </div>
    )
}