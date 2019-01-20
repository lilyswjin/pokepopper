import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class GameOver extends Component {
  
  componentDidMount() {
    const player = document.getElementById(`player`)
    player.currentTime = 0;
    player.volume = 0

  }

  render() {
    return (
      <div className="gameover">
        <h1 className="gameover__text">GAME OVER</h1>
        <Link to='/'><button className="gameover__button" onClick={this.props.startGame} onMouseDown={this.props.fadeAudio} >Pop Again?</button></Link>

        <img src="./assets/deadmagikarp.gif" alt="magikarp flop" className="gameover__karp" width="200px"></img>
        <audio volume="0.05" id="gameOverMusic" controls hidden autoPlay loop > 
            <source src={'./assets/sounds/theend.mp3'} type="audio/mpeg"/>
                        unsupported !! 
        </audio>
      </div>
    )
  }
}
