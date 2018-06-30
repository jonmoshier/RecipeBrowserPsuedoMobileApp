import React, { Component } from "react";
import NumberFormat from "react-number-format";

const API =
  "https://api.edamam.com/search?app_id=0bde13c9&app_key=5150ef5ab2269f2e51211db77380222d&q=";
var URI;

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }

  queryBuilder() {
    URI = API;
    if (this.props.query) {
      URI = URI + this.props.query;
    } else {
      URI = URI + "cookies";
    }
    if (this.props.category) {
      if (this.props.category === "veg" || this.props.category === "vegan") {
        URI = URI + "&health=" + this.props.category;
      }
      if (
        this.props.category === "low-carb" ||
        this.props.category === "high-protein"
      ) {
        URI = URI + "&diet=" + this.props.category;
      }
    }
    return URI;
  }

  fetch() {
    var query = this.queryBuilder();
    console.log(query);
    fetch(query)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.query !== prevProps.query ||
      this.props.category !== prevProps.category
    ) {
      this.fetch();
    }
  }

  render() {
    const { hits } = this.state;
    return (
      <div>
        {hits.length > 0 ? (
          hits.map(hit => (
            <div className="foodCard">
              <img
                alt={hit.recipe.label}
                title={hit.recipe.label}
                src={hit.recipe.image}
              />
              <div className="title">
                <h1>{hit.recipe.label}</h1>
              </div>
              <div className="nutritionals">
                <h5>
                  <NumberFormat
                    value={hit.recipe.calories}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={0}
                  />{" "}
                  cal | {hit.recipe.totalTime} min
                </h5>
              </div>
              <a className="round-button">♡</a>
            </div>
          ))
        ) : (
          <h1 style={{ paddingTop: 100 + "px" }}>no results were found</h1>
        )}
      </div>
    );
  }
}

export default Feed;
