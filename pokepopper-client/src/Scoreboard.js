import React, { Component } from 'react';
import Timer from './Timer';
import {levelReq} from './Utils';

export default class Scorebox extends Component {

  state = {
    score: this.props.score
  }
 
  componentDidMount(){
    this.props.onRef(this);
  }

  componentDidUpdate(prevProps, nextProps){
    if (prevProps.score !== this.props.score) {
      this.setState({
        score: this.props.score
      })
    }
  }

  componentWillMount(){
    this.props.onRef(undefined);
  }


  render() {
    return (
    <div className="scorebox">
        <Timer level={this.props.level} gameOver={this.props.gameOver} highScore={this.props.highScore} score={this.state.score} />
        <h2 className="level">Level: {this.props.level}</h2>
        <h2 className="next-level">Next Level: {levelReq[this.props.level].score}</h2>
        <h2 id="totalscore">Total Score: 0</h2>
        <h2 id="score"> Current Score: 0</h2>
        
    </div>
    )
  }
}
