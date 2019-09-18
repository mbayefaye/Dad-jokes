import React, { Component } from "react";
import "./Joke.css";
class Joke extends Component {
  getRGB(rating) {
    if (rating > 0) return `${200 - rating * 20},200,0`;
    return `200,${200 - rating * -20},0`;
  }
  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.props.upvote} />
          <span
            className="Joke-votes"
            style={{
              border: `3px solid rgb(${this.getRGB(this.props.votes)})`
            }}
          >
            {this.props.votes}
          </span>
          <i className="fas fa-arrow-down" onClick={this.props.downvote} />
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <div className="Joke-smily">
          <i className="em em-rolling_on_the_floor_laughing" />
        </div>
      </div>
    );
  }
}

export default Joke;
