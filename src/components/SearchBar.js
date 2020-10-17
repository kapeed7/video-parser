import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Video Search </label>
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
