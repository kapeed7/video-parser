import "./styles.css";
import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./components/api/youtube";
import VideoList from "./components/VideoList";
import Video from "./components/Video";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    this.setState({ videos: [] });
    const results = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: results.data.items,
      selectedVideo: results.data.items[0]
    });
    // console.log(this.state.videos[0]);
  };

  componentDidMount() {
    this.onTermSubmit("stories");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <Video video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
