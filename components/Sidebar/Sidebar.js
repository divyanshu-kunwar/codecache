import ThemeIcon from './ThemeIcon'
import styles from './Sidebar.module.css'
import Link from 'next/link';
export default function Sidebar(props){
    return(
        <div className={props.sideExpanded ?  
        styles.sidebar_collapsed : styles.sidebar} >

        <div className={styles.theme_container}
        onClick={()=>{
          if(props.theme === "light"){
            sessionStorage.setItem("theme" , "dark");
            props.setTheme("dark");
          }else{
            sessionStorage.setItem("theme" , "light");
            props.setTheme("light");
          }
        }}
        >
        <span>Theme</span>
        <span>
        <ThemeIcon theme={props.theme} />
        </span>

        </div>
        <Link href='/home' className={styles.navLink}><span>Home</span></Link>
        <Link href='/browse' className={styles.navLink}><span>Browse by Tags</span></Link>
        <div className={styles.navLink}><span>Notification</span></div>
        <Link href='https://www.youtube.com/@CodeCache' className={styles.navLink}><span>Youtube Channel</span></Link>
        <Link href='/buymeacoffee' className={styles.navLink}><span>Buy me a coffee</span></Link>
      </div>
    )
}