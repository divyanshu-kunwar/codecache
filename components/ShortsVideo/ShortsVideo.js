import Image from 'next/image'

import styles from './ShortsVideo.module.css'


const shortsData = [
    {videoUrl:'seRovvWLGBo' , thumbnailUrl:'' , Title:'A'},
    {videoUrl:'Mf5PZaLdFUU' , thumbnailUrl:'' , Title:'B'},
    {videoUrl:'AuObqT9fGM0' , thumbnailUrl:'' , Title:'C'},
    {videoUrl:'vjR2z2rOplo' , thumbnailUrl:'' , Title:'D'},
    {videoUrl:'4uFI-UM0mig' , thumbnailUrl:'' , Title:'E'},
    {videoUrl:'ubWhhAubUSA' , thumbnailUrl:'' , Title:'F'},
    {videoUrl:'ErL6GSSeC8w' , thumbnailUrl:'' , Title:'G'},
]
export default function ShortsVideo(props){
    return(
        <div className={styles.ShortsVideo}>
            {
            /* The idea is to create a gallery of shorts and 
            onclick the address changes and so there is change in 
            the default playing video for this we can use something like stack
            use modulo  operator to select 5 videos 2 on each side of main video*/
            }

            <div className={styles.horizontalGallery}>

                <div className={styles.shortsCard}>
                    {/* <iframe width="400" height="800" src="https://www.youtube.com/embed/seRovvWLGBo" 
                    title="Divyanshu" 
                    frameborder="0"></iframe> */}
                </div>

            </div>

        </div>
    )
}
