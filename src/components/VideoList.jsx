import VideoListEntry from "./VideoListEntry.js"

var VideoList = ({videos},props) => {
  var data = videos.data;


  const videoEntry = videos.map((videoInfo) =>

     <VideoListEntry video = {videoInfo} key = {videoInfo.id.videoId} click = {props.click}/>

  )


  return (
  <div className="video-list">
   {videoEntry}

  </div>
);
}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.

export default VideoList;


 /* <div><h5><em>videoListEntry</em> <VideoListEntry /></h5></div>
    <div><h5><em>videoListEntry</em> <VideoListEntry /></h5></div>
    <div><h5><em>videoListEntry</em> <VideoListEntry /></h5></div>
    <div><h5><em>videoListEntry</em> <VideoListEntry /></h5></div>
    <div><h5><em>videoListEntry</em> <VideoListEntry /></h5></div> */