import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const loader = <div className="ui active inline loader"></div>;

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
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.state.isLoading ? loader : <div></div>}
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoItemClick={this.onVideoItemClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
