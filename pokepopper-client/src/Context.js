
import React, { Component } from 'react';
const Score = React.createContext();


export default class ScoreProvider extends Component {
  state = {
    score : 0,
  }
render() {
    return (
      <Score.Provider value={this.state}>
        {this.props.children}
      </Score.Provider>
    )
  }
}

