import NavBar from '../components/NavBar/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import bg from '../media/Home.jpg'


export default function Home() {

  const [theme , setTheme] = useState("dark");

  useEffect(() => {
    if(sessionStorage.getItem("theme") === "light"){
      setTheme("light");
    }else{
      sessionStorage.setItem("theme" , "dark");
      setTheme("dark");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Code Cache</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="some description here" />
        <link rel="icon" href="/favicon_light.png" media="(prefers-color-scheme: dark)"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <main style={{ overflowY:"hidden"}}>
            <Image src={bg} alt="bg"  style={{ width:"100%", opacity:"0.2" ,
             objectFit:'contain' , objectPosition:'top' , position:'absolute' , zIndex:"-2"}}/>
            <div>
              <div>
                <NavBar theme={theme} setTheme={setTheme}/>
              </div>
              <div>

              </div>
            </div>
      </main>
    </div>
  )
}
