import menuIconDark from "./menu.svg";
import appLogoDark from "./logo.svg";
import searchLogoDark from "./search.svg";

import menuIcon_Light from "./menuLight.svg";
import appLogo_Light from "./logoLight.svg";
import searchLogo_Light from "./searchLight.svg";

import style from "./navbar.module.css";
import Image from "next/image";

import {setLight , setDark} from '../Theme/Theme.js';
import { useEffect , useState} from "react";



export default function NavBar(props) {
  
  const [menuIcon , setMenuIcon] = useState(menuIconDark);
  const [appLogo , setAppLogo] = useState(appLogoDark);
  const [searchLogo , setSearchLogo] = useState(searchLogoDark);

  useEffect(() => {
      if(props.theme === "light"){
        setLight();
        setMenuIcon(menuIcon_Light);
        setAppLogo(appLogo_Light);
        setSearchLogo(searchLogo_Light);
      }else{
        setDark();
        setMenuIcon(menuIconDark);
        setAppLogo(appLogoDark);
        setSearchLogo(searchLogoDark);
      }
    }, [props.theme]);

  return (
    <div className={style.navbar}>
      <Image src={menuIcon} alt="menu" className={style.menuIcon} 
        onClick={()=>{
          if(props.theme === "light"){
            sessionStorage.setItem("theme" , "dark");
            props.setTheme("dark");
          }else{
            sessionStorage.setItem("theme" , "light");
            props.setTheme("light");
          }
        }}/>
      <div className={style.appname}>
        <Image src={appLogo} alt="menu" className={style.appIcon} />
        <span>CodeCache</span>
      </div>
      <div className={style.searchbar}>
        <span>Search ...</span>
        <Image src={searchLogo} alt="search" className={style.searchIcon} />
      </div>
    </div>
  );
}
