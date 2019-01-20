import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import Fishbox from './Fishbox';
import {updateScore, levelReq} from './Utils';

let currentSoundpath = "./assets/sounds/waterdrop.mp3"

export default class Playbox extends Component {
  constructor (props) {
    super(props);
    this.player = React.createRef();
  }

  // static contextType ;

  state = {
    count: 0,
    level: 0,
    score: 0,
  }

  componentDidMount() {
    this.props.onRef(this);
    this.interval = setInterval( () => 
      this.setState({ 
        count: this.state.count + 1 ,
    
      }), 12000)
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.score > levelReq[this.state.level].score) {
      // console.log(this.state.score, levelReq[this.state.level].score)
      this.setState({
        level: this.state.level + 1,
        
      })
    } 
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (this.state.score !== prevState.score) {
      return false;
    } else {
      return true;
    }
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
    clearInterval(this.interval);
  }

  clickHandler = (e) => {
    this.setState({
      score: this.state.score + parseInt(e.target.name)
    }, updateScore(parseInt(e.target.name), this.state.score))
    
    // log audio events
    const audio = document.getElementById(`eff`)
    audio.currentTime = 0;
    audio.play();
  }

  render() {

    return (
      <div className="playbox">    
        <Scoreboard level={this.state.level} score={this.state.score} onRef={ref => this.scoreBox = ref} logScore={this.props.logScore} gameOver={this.props.gameOver} />

        {/* non-visible elements below: */}
        <Fishbox clickHandler={this.clickHandler} level={this.state.level} logScore={this.props.logScore} />

        <div className="audiobox">
          <audio volume="0.1" id="eff" controls hidden > 
              <source src={currentSoundpath} type="audio/mpeg"/>
                          unsupported !! 
          </audio>
          {/* <Audio /> */}
        </div>
      </div >
    )
  }
}
