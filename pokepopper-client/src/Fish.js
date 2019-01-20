import React, { Component } from 'react'
import { random, animals } from './Utils';
import './App.css'

import styled, {keyframes} from 'styled-components';

let width = window.innerWidth || document.documentElement.clientWidth;
let height = window.innerHeight || document.documentElement.clientHeight;

export default class Fish extends Component {

    state = {
        class: "fish",
        clicked: false,
    }

    componentDidMount(){
        this.setState({
            class: 'fish',
            clicked: false
        })
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.class === "fish hidden"){
            this.setState({
                class: 'fish',
                clicked: false
            })
        }
    }

    clickFish = (e) => {
        if (!this.state.clicked) {
            this.props.logScore()
            this.props.clickHandler(e)
            setTimeout(()=>{
                this.setState({
                    class: "fish hidden",
                    clicked: true
                })
            }, 10)
        }
    }

    render() {
        let fall = (rndX)=> {
            return (
              keyframes`
                from {
                  position: absolute;
                  top: ${random(-600, -2000)}px;
                  left: ${rndX}px;
                  opacity: 100;
                }
                to {
                  position: absolute;
                  top: ${height+300}px;
                  left: ${rndX}px;
                }
                0% {-webkit-transform: rotate(0deg);}
                100% {-webkit-transform: rotate(-360deg);}
              `
            )
        }
     
        let animationSpeed1 =  (this.props.level*.5) < 15 ? (15 - this.props.level*.5) : 5;
        let animationSpeed2 =  (this.props.level*.5) < 12 ? (12 - this.props.level*.5) : 3;

        let NewFish = styled.div`
                    width: 8rem;
                    height: 8rem;
                    animation: ${fall(random(120, (width-120)))} ${random((animationSpeed1), (animationSpeed2))}s 1 linear;  
                    transition: all 2s linear; 
                `

        return (
            <NewFish className={this.state.class}
                onClick={this.clickFish}
                >
                <img src={ animals[this.props.fishType].url } 
                     alt="fish"
                     height="100%"
                     width="100%"
                     name={ animals[this.props.fishType].pt}
                            />
            </NewFish>
        )
    }
}
