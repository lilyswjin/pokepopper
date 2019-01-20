import React, { Component } from 'react'
import {Link} from 'react-router-dom';
let url = 'https://pokepopper-api.herokuapp.com/scores';

export default class Leaderboard extends Component {

    state = {
        scores: [],
        top5: [],
        name: ''
    }

    componentDidMount() {
        this.getScores();
    }

    getScores = () => {
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                let sortedData;
                sortedData = data.sort((a, b)=> parseInt(b.score) - parseInt(a.score))

                this.setState({
                    scores: sortedData,
                    top5: sortedData.slice(0, 5)
                })
            })
    }

    submitHandler = (e) => {
        e.preventDefault();

        let body = {
            name: this.state.name,
            score: this.props.score
        }

        let init = {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        if( this.state.name !== "") {
            fetch(url, init)
                .then(res => {
                    res.json()
                    this.setState({
                        name: ""
                    })
                    return this.getScores()
                })
            }
        e.target.parentElement[0].value = "";
        e.target.parentElement.disabled = true;
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    fadeAudio = () => {
        const audio = document.getElementById(`player`)
        audio.volume = 0
    }

    render() {
        let ScoreData = () => {
            let result;
            if (this.state.top5.length > 0) {
                result = this.state.top5.map((scores, i) => {
                    return (
                        <div className="leaderboard__scores" key={scores.id}>
                            <span>{i + 1}. {scores.name}</span> <span>{scores.score}</span>
                        </div>
                    )
                })
            } else {
                result = <div>"Loading"</div>
            }
            
            return (
                result
            )
        }

        return (
            <div className="leaderboard">
                <div className="leaderboard__title">{'>>>High Scores<<<'}</div>
                <div className="leaderboard__scorebox">
                    <div className="leaderboard__subtitle"><span>>>PLAYER:</span> <span>SCORE:{'<<'}</span></div>
                    {ScoreData()}
                </div>
                <div className="leaderboard__myscore">
                    <span>Your Score: {this.props.score}</span>
                </div>
                <form id="score-form" value={this.state.name}  onChange={this.handleChange}>
                    <label>Player:
                        <input name="form-text" type="text" form="score-form"></input>
                    </label>
                    <input type="submit" name="submit" form="score-form" onClick={this.submitHandler}></input>
                </form>
                <Link to="/gameover"><button onClick={this.fadeAudio}>NEXT →</button></Link>
            </div>
        )
    }
}
