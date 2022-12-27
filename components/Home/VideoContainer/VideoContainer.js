import { useRouter } from "next/router";
import Image from "next/image";
import styles from './VideoContainer.module.css'

import playtime from "../../../media/icons/playtime.svg";

export default function VideoContainer(props){

  const router = useRouter()

    return(
        <div className={props.Type==='shorts' ? styles.shortsContainer : styles.seriesContainer}
        onClick={()=>{
          if(props.Type==='tools'){
            window.open(props.ToolHref)
            return;
          }
          router.push(`${props.Type}/${props.VideoId}`)
        }}>

        <div className={props.Type==='shorts' ? styles.imageShortsContainer : styles.imageSeriesContainer}>
            {
            props.Type === 'shorts' && 
            <Image src={`https://img.youtube.com/vi/${props.VideoId}/hqdefault.jpg`} alt={props.Title + " Thumbnail"} 
            width='350'
            height='100'/>
            }
                        {
            (props.Type === 'series') && 
            <Image src={props.Image} alt={props.Title + " Thumbnail"} 
            width='350'
            height='100'/>
            }
            {
            (props.Type==='videos') && 
            <Image src={`https://img.youtube.com/vi/${props.VideoId}/hqdefault.jpg`} alt={props.Title + " Thumbnail"} 
            width='350'
            height='100'/>
            }
            {
            (props.Type=="tools") && 
            <Image src={props.Image} alt={props.Title + " Thumbnail"} 
            width='350'
            height='100'/>
            }
        
        </div>

        <div className={(props.Type == "tools")? styles.displayNone : styles.seriesStats}>
          <div className={props.Type==='shorts'? styles.shortTimeStats:styles.playtimeStats}>
            <Image
              className={props.theme == "dark" && styles.statsIconDark}
              src={playtime}
              alt="playtime"
            />
            {/* format integer time in required format */}
            <span>{(props.Playtime<60) 
                              ? props.Playtime+"sec"
                              : (props.Playtime<3600)
                              ? Math.floor(props.Playtime/60)+"m "+(props.Playtime%60)+"s"
                              : Math.floor(props.Playtime/3600)+"h "+Math.floor((props.Playtime%3600)/60)+"m"

              }</span>
          </div>
         { props.Type==='series' &&
          <div className={styles.viewStats}>
            <span>{props.VideoCount} Chapters</span>
          </div>}
        </div>
        <div className={props.Type==="shorts" ? styles.shortsHead: styles.seriesHead}>{props.Title}</div>
        <div className={(props.Type==='shorts' || props.Type==='videos')? styles.displayNone : styles.seriesInfo}>
          {
            props.Description && props.Description.length>100 ?  props.Description.slice(0,100)+"..." : props.Description
  }
        </div>
      </div>
    )
}