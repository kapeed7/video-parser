import "./Video.css";
import React from "react";

class VideoDetails extends React.Component {
  render() {
    const { video, onVideoSelect } = this.props;
    return (
      <div onClick={() => onVideoSelect(video)} className="video item">
        <img
          className="ui image"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.default.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title} </div>
        </div>
      </div>
    );
  }
}

export default VideoDetails;
