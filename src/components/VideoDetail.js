import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
      <div>
        <iframe src={videoSrc} title="video player"></iframe>
      </div>
    </div>
  );
};

export default VideoDetail;
