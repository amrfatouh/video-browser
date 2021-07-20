import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, isLoading: false };

  onSearchSubmit = (term) => {
    this.setState({ isLoading: true }, async () => {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
        isLoading: false,
      });
    });
  };

  onVideoItemClick = (video) => {
    this.setState({ selectedVideo: video }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.state.isLoading ? <div>Loading...</div> : <div></div>}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoItemClick={this.onVideoItemClick}
        />
      </div>
    );
  }
}

export default App;
