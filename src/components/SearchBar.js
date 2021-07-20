import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-bar">Enter a search term</label>
            <input
              type="text"
              id="search-bar"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
