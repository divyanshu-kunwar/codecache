import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code Cache</title>
        <meta name="description" content="some description here" />
        <link rel="icon" href="/favicon_light.png" media="(prefers-color-scheme: dark)"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <main style={{"display":"flex", "flexDirection":"column", "alignItems":"center", "justifyContent":"center" , "height":"100vh", "fontSize":"32px"}}>
            Launching Soon 🐻
      </main>
    </div>
  )
}
