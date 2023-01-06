export default async function youtubePlaylist(req, res){

    // https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&key=[YOUR_API_KEY]
    
    const playlistId = req.query.playlistId
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.YOUTUBE_API_KEY}`
    const response = await fetch(url)
    const data = await response.json()

    // add detail of each video in playlist also calculate total time of playlist
    let playlist = {
        id: playlistId,
        totalPlaytime: 0,
        description: data.items[0].snippet.description,
        totalVideos: data.pageInfo.totalResults,
        title: data.items[0].snippet.title,
        videos: [],
        nextToken: data.nextPageToken
    }


    // make a single request to get all detail of all the videos in playlist
    // time for each video is in ISO 8601 format PT1M33S
    const videoIds = []
    data.items.forEach(item => {
        videoIds.push(item.snippet.resourceId.videoId)
    })
    const videoResponse = await fetch(
        // both stats and content details
        `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds.join(',')}&key=${process.env.YOUTUBE_API_KEY}`
    )
    const videoData = await videoResponse.json()
    
    
    // add detail of each video in playlist also calculate total time of playlist
    data.items.forEach(item => {
        // if video title is "Private video" then skip it
        if(item.snippet.title !== "Private video"){

        let video = {
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            playtime: 0,
        }
        videoData.items.forEach(videoDetail => {
            
            if(videoDetail.id === video.id){
                // time for each video is in ISO 8601 format PT1M33S or PT33S or PT1M or PT1H1M33S or 51S
                let time = videoDetail.contentDetails.duration
                let hours = 0
                let minutes = 0
                let seconds = 0
                time = time.replace('PT', '')
                if(time.includes('H')){
                    hours = parseInt(time.split('H')[0])
                    time = time.split('H')[1]
                }
                if(time.includes('M')){
                    minutes = parseInt(time.split('M')[0])
                    time = time.split('M')[1]
                }
                if(time.includes('S')){
                    seconds = parseInt(time.split('S')[0])
                }

                video.playtime = hours*3600 + minutes*60 + seconds
                playlist.totalPlaytime += video.playtime
                // modify publishedAt to be in format 2021-Jan-01
                let date = new Date(video.publishedAt)
                video.publishedAt = `${date.getFullYear()}-${date.toLocaleString('default', { month: 'short' })}-${date.getDate()}`
            }
        })
        playlist.videos.push(video)
    }
    })

    res.status(200).json(playlist)

}

 /*
 -------------------- request example --------------------
 GET /api/fetchPlaylistDetail
 ?playlistId
 query - playlistId
 
 https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&key=[YOUR_API
 
 ------------------------- response example ---------------------------

{
  "id": "PLtEPUaeDclkuGhDB-vYA-sH-Ag7Kty2tx",
  "totalPlaytime": 287,
  "description": "How do you get good at coding fast? Well… despite what the internet might say, there’s no quick, easy process. However, Miško Hevery, the inventor of Angular and Qwik, has some wise words to help you along the way, young grasshopper. 🦗\n\nCheck out the home for untold developer stories around open source, careers and all the other cool stuff developers are doing at cult.honeypot.io.\n\nHoneypot is a developer-focused job platform, on a mission to get developers great jobs. Wanna see what we're all about? Visit honeypot.io to find a job you love.\n\nTo learn more about Honeypot: http://www.honeypot.io/?utm_source=youtube\n\nFollow Miško:\nhttps://twitter.com/mhevery\nhttps://github.com/mhevery\nhttp://misko.hevery.com/\n\nFollow us:\nTwitter: https://twitter.com/honeypotio\nFacebook: https://www.facebook.com/Honeypotio/\nLinkedIn: https://www.linkedin.com/company/honeypotio/\nInstagram: https://www.instagram.com/honeypot.cult/",
  "totalVideos": 4,
  "title": "The Best Way of Learning According to Miško Hevery 🧠",
  "videos": [
    {
      "id": "4vjNAQYHCnQ",
      "title": "The Best Way of Learning According to Miško Hevery 🧠",
      "thumbnail": "https://i.ytimg.com/vi/4vjNAQYHCnQ/mqdefault.jpg",
      "description": "How do you get good at coding fast? Well… despite what the internet might say, there’s no quick, easy process. However, Miško Hevery, the inventor of Angular and Qwik, has some wise words to help you along the way, young grasshopper. 🦗\n\nCheck out the home for untold developer stories around open source, careers and all the other cool stuff developers are doing at cult.honeypot.io.\n\nHoneypot is a developer-focused job platform, on a mission to get developers great jobs. Wanna see what we're all about? Visit honeypot.io to find a job you love.\n\nTo learn more about Honeypot: http://www.honeypot.io/?utm_source=youtube\n\nFollow Miško:\nhttps://twitter.com/mhevery\nhttps://github.com/mhevery\nhttp://misko.hevery.com/\n\nFollow us:\nTwitter: https://twitter.com/honeypotio\nFacebook: https://www.facebook.com/Honeypotio/\nLinkedIn: https://www.linkedin.com/company/honeypotio/\nInstagram: https://www.instagram.com/honeypot.cult/",
      "publishedAt": "2022-Oct-13",
      "playtime": 77
    }
  ]
}

*/