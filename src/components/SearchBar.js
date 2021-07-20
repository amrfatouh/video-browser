import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="search-bar">Enter a search term</label>
          <input
            type="text"
            id="search-bar"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
