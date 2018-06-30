import React from "react";
import ReactDOM from "react-dom";
import Feed from "../components/feed";
import Search from "../components/search";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchString: null
    };
  }

  categoryCallback = category => {
    this.setState({ Category: category });
  };

  searchCallback = searchString => {
    this.setState({ SearchString: searchString });
  };

  render() {
    return (
      <div className="App">
        <h4>Home</h4>
        <Search
          searchCallback={this.searchCallback}
          categoryCallback={this.categoryCallback}
        />

        <Feed query={this.state.SearchString} category={this.state.Category} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
