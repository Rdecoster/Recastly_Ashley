import YOUTUBE_API_KEY from '../config/youtube.js'
var searchYouTube = ({key , query, max }={key : YOUTUBE_API_KEY, query:"sailing", max :5}, callback = ()=>{}) => {
console.log(key, "our key")
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: key,
        q: query,
        part: 'snippet',
        maxResults: max,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function({items}){
        callback(items)
    },
    error: function(response){
        console.log("Request Failed");
    }
  });
  // TODO
};


export default searchYouTube;
