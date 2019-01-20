import React from 'react';
import {levelReq} from './Utils';

export default class Timer extends React.Component {
    state = {
        seconds: levelReq[this.props.level].timer,
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const seconds = this.state.seconds - 1;

            this.setState(
                {seconds: seconds >= 0 ? seconds : 0}
                );
            }, 1000
        );
    }
  
    componentDidUpdate(prevProps, prevState) {
        if ((this.props.level > prevProps.level) && (this.state.seconds > 0)) {
            this.setState({
                seconds: this.state.seconds + 10*this.props.level,
            })
        } else if (this.state.seconds === 0 ) {
            setTimeout(()=> {
                this.props.gameOver();
                clearInterval(this.interval);
            }, 5000)

        }
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <h2 className="timer">
                Time left: {this.state.seconds}
            </h2>
        )
    }
}

