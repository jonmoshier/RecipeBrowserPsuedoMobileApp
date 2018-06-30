import React, { Component } from "react";

class Search extends Component {
  state = {
    query: ""
  };

  handleCategoryChange = e => {
    this.props.categoryCallback(e.value);
    this.setState({
      category: e.value
    });
  };

  handleInputChange = () => {
    this.props.searchCallback(this.search.value);
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <form>
        <div
          id="nav"
          className="btn-group"
          role="group"
          aria-label="Basic example"
        >
          <button
            value="vegetarian"
            type="button"
            className="btn btn-light"
            onClick={e => this.handleCategoryChange(e.target)}
          >
            Veg
          </button>
          <button
            value="vegan"
            type="button"
            className="btn btn-light"
            onClick={e => this.handleCategoryChange(e.target)}
          >
            Vegan
          </button>
          <button
            value="low-carb"
            type="button"
            className="btn btn-light"
            onClick={e => this.handleCategoryChange(e.target)}
          >
            Low-Carb
          </button>
          <button
            value="high-protein"
            type="button"
            className="btn btn-light"
            onClick={e => this.handleCategoryChange(e.target)}
          >
            High-Protein
          </button>
          <button
            value="none"
            type="button"
            className="btn btn-secondary"
            onClick={e => this.handleCategoryChange(e.target)}
          >
            None
          </button>
        </div>
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Search
              </span>
            </div>
            <input
              id="searchbar"
              type="text"
              className="form-control"
              placeholder="..."
              aria-label="Search"
              aria-describedby="basic-addon1"
              ref={input => (this.search = input)}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
