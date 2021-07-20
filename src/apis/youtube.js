import axios from "axios";

const KEY = "AIzaSyDouIOx9Zps8u7hOobYLjO6-PjXJjaGztk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    videoEmbeddable: "true",
    type: "video",
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
