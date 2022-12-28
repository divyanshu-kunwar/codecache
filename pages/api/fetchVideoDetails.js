// fetch video details like view count, likes, playtime , title, description, etc

export default async function fetchVideoDetails(req, res) {
    // get the video id from the request
    const videoId = req.query.videoId;

    // get api key from env and create a url for getting stats , content detail 
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`;

    // fetch the data from the url
    const response = await fetch(url);
    
    // convert the response to json
    const data = await response.json();

    // clean the data and send it back to the client
    const video ={
        id: data.items[0].id,
        title: data.items[0].snippet.title,
        description: data.items[0].snippet.description,
        thumbnail: data.items[0].snippet.thumbnails.medium.url,
        publishedAt: data.items[0].snippet.publishedAt,
        viewCount: data.items[0].statistics.viewCount,
        likeCount: data.items[0].statistics.likeCount,
        duration: data.items[0].contentDetails.duration,
    };
    
    // convert the duration from ISO 8601 format to seconds
    let time = video.duration.replace('PT', '');

    let hours = 0;
    let minutes = 0;
    let seconds = 0;
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
    video.playtime = hours * 3600 + minutes * 60 + seconds

    res.status(200).json(video);

}

/*

----------------------------- Request -----------------------------
GET /api/fetchVideoDetails
?videoId=
query : videoId

------------------------------ Response ------------------------------
{
  "id": "4xuBT3BbsYU",
  "title": "Build Your Own SaaS - PagerDuty Clone. You'll Learn PostgreSQL + Stripe API + Twilio + SMTP",
  "description": "Learn how to build your own SaaS app. You will create your own PagerDuty clone using PostgreSQL,",
  "thumbnail": "https://i.ytimg.com/vi/4xuBT3BbsYU/mqdefault.jpg",
  "publishedAt": "2022-12-20T13:47:21Z",
  "viewCount": "63905",
  "likeCount": "1625",
  "duration": "PT1H11M29S",
  "playtime": 4289
}

*/