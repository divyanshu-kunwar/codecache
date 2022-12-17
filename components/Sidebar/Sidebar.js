import ThemeIcon from './ThemeIcon'
import styles from './Sidebar.module.css'
export default function Sidebar(props){
    return(
        <div className={styles.sidebar} 
        style={props.sideExpanded ? {width:"0px"} : {width:"250px"}}>
        <div className={styles.themeContainer}>
        <span>Theme</span>
        <span onClick={()=>{
            if(props.theme === "light"){
              sessionStorage.setItem("theme" , "dark");
              props.setTheme("dark");
            }else{
              sessionStorage.setItem("theme" , "light");
              props.setTheme("light");
            }
          }}>
        <ThemeIcon theme={props.theme} />
        </span>

        </div>
        <div className={styles.navLink}><span>Home</span></div>
        <div className={styles.navLink}><span>Browse by Tags</span></div>
        <div className={styles.navLink}><span>Notification</span></div>
        <div className={styles.navLink}><span>Youtube Channel</span></div>
        <div className={styles.navLink}><span>Buy me a coffee</span></div>
      </div>
    )
}