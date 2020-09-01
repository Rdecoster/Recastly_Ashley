import VideoListEntry from "./VideoListEntry.js"

var VideoList = (props) => {
  var data = props.data;
  console.log(data, 'the data in video list');

  const videoEntry = data.map((videoInfo) =>

     <VideoListEntry video = {videoInfo}/>

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