import React, { Component } from 'react'
import Fish from './Fish';
import { random,animals } from './Utils';

export default class Fishbox extends Component {

    state = {
        count: 0,
        score: 0,
        totalScore: 0
    }

    render() {
        let newFishArray = () => {
        let array = []

        for (let i = 0; i < random(5, 10); i++){
            array.push(<Fish fishType={random(0, animals.length-1)} clickHandler={this.props.clickHandler} level={this.props.level} key={i} logScore={this.props.logScore}></Fish>)
        }
            return array;
        }

        return (
            <div className="fishbox">
                {newFishArray()}
            </div>
        )
    }
}
