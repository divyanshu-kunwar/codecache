export default async function youtubePlaylist(req, res){
    
    // playlistId is an array of strings
    // chapterLength is an array of integers corresponding to each playlist
    const playlistId = req.query.playlistId
    const chapterLength = req.query.chapterLength

    const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2ccontentDetails&id=${playlistId}&maxResults=25&key=${process.env.YOUTUBE_API_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    // for each item in data.items create a playlist object
    const playlistData = []

    // get the total playtime of each playlist from chapterLength
    const chapterLengthArray = chapterLength.split(',')
    
    data.items.forEach(item => {
        let playlist = {
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.medium.url,
            noOfVideos: item.contentDetails.itemCount,
            chapterLength: 0
        }
        playlistData.push(playlist)
    })

    // add the chapterLength to the playlistData
    for(let i=0; i<playlistData.length; i++){
        playlistData[i].chapterLength = parseInt(chapterLengthArray[i])
    }

    // send the response
    res.status(200).json(playlistData)
}

 /*
 -------------------- request example --------------------
 GET /api/fetchHomePlaylist
 ?playlistId=[]&chapterLength=[]
 query - playlistId , chapterLength
 
 https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&key=[]
 
 ------------------------- response example ---------------------------
[
  {
    "id": "PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd",
    "title": "React Testing Tutorial",
    "description": "A tutorial series on React Testing for beginners",
    "thumbnail": "https://i.ytimg.com/vi/T2sv8jXoP4s/mqdefault.jpg",
    "noOfVideos": 53,
    "chapterLength": 10
  }
]
*/