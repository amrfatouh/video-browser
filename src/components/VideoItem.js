import React from "react";

const VideoItem = ({ video, onVideoItemClick }) => {
  return (
    <div onClick={() => onVideoItemClick(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div>{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
