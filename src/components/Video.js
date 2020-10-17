import React from "react";

const Video = ({ video }) => {
  if (!video) {
    return <div> Loading ... </div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description} </p>
      </div>
    </div>
  );
};

export default Video;