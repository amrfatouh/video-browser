import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ videos, onVideoItemClick }) {
  const returnedVideos = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoItemClick={onVideoItemClick}
    />
  ));
  return <div>{returnedVideos}</div>;
}
