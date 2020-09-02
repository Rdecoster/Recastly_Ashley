import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js'
import YOUTUBE_API_KEY from '../config/youtube.js'

import searchYouTube from '../lib/searchYouTube.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
// API DATA
      data: {},
      currentVideo: {}
  }

  this.state.data = exampleVideoData;
  console.log(this.state.data, "should run once!")
  this.state.currentVideo =exampleVideoData[0];
  this.handleClick = this.handleClick.bind(this);
  this.getNewVideos = this.getNewVideos.bind(this);
  this.updateState = this.updateState.bind(this);

  }

  handleClick(videoObj) {
    this.setState({currentVideo : videoObj})
  }
  updateState(items) {
    console.log("update videos envoked with data :", items)
    this.setState({
      currentVideo: items[0],
      data: items
    })
  }


  getNewVideos(query) {
    console.log("you we got to work get video function")


    searchYouTube(YOUTUBE_API_KEY,`${query}`,5, this.updateState)

  }


  componentDidMount() {

  this.getNewVideos(YOUTUBE_API_KEY, 'Anchorman')
 }

render(){

 return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search getNewVideos = {this.getNewVideos}/> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo}/> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList videos={this.state.data} click={this.handleClick}/> </h5></div>
          </div>
        </div>
      </div>
    );
}
  }
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
