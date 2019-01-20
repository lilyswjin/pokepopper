import React, { Component } from 'react';
import './App.css';
import Playbox from './Playbox';
import waterfall from './waterfall.gif';
import Title from './titleScreen/Title';
import FishMenu from './FishMenu';
import GameOver from './GameOver';
import Leaderboard from './Leaderboard';
import Audio from './Audio';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';



// const Score = React.createContext();

class App extends Component {
  constructor (props) {
    super(props);
    this.scoreBox = React.createRef();
  }

  state = {
    style: {
      backgroundImage: `url(${waterfall})`,
      backgroundSize: 'cover',
    },
    isGameOver: false,
    score: 0,
  }

  gameOver = () => {
    this.setState ({
      isGameOver: true
    })
  }

  startGame = () => {
    this.setState ({
      isGameOver: false
    })
    
    const audio = document.getElementById(`player`)
    audio.volume = 0.2
    audio.currentTime = 0;
  }

  logScore = (e) => {
    let currentScore = (this.scoreBox.state.score);

    this.setState({
      score : currentScore
    })
    
  }

  renderRedirect = () => {
    return <Redirect to="/"></Redirect>
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (this.state.score !== prevState.score) {
      return false;
    } else {
      return true;
    }
  }

  // fadeAudio = ()=> {
  //   const audio = document.getElementById(`player`);
  //   audio.volume = 0;
  //   // audio.play();
  // }

  render() {
    let Game;

    if (!this.state.isGameOver) {
      Game = () => <div className="game">
          <Title />
          <Playbox gameOver={this.gameOver} logScore={this.logScore} onRef={ref => this.scoreBox = ref} />
        </div>
    } else if (this.state.isGameOver) {
        // const Game = <GameOver startGame={this.startGame} /> 
      Game = () => <Leaderboard score={this.state.score} />
    }

    const GameOverScreen = () => <GameOver startGame={this.startGame} fadeAudio={this.fadeAudio}/> 
    
    return (
      <div className="App" style={this.state.style }>
            <FishMenu/>
            <Router>
              <Switch>
                <Route exact={true}  path='/' render={Game}/>
                <Route exact={true} path='/gameover' render={GameOverScreen}/>
                <Route path='/' render={this.renderRedirect}/>
                {/* {game} */}
                {/* <Leaderboard score={this.state.score} /> */}
              </Switch>
            </Router>
            <Audio />
          {/* </Score.Provider> */}
      </div>
    );
  }
}

export default App;


