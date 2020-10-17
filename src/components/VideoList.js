import React from "react";
import VideoDetails from "./VideoDetails";

const VideoList = (props) => {
  const renderedVideos = props.videos.map((video) => (
    <VideoDetails
      onVideoSelect={props.onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));
  return <div className="ui relaxed divided list">{renderedVideos}</div>;
};

export default VideoList;
