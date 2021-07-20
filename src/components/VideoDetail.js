import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <h3 className="ui header">{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player"></iframe>
      </div>
    </div>
  );
};

export default VideoDetail;
