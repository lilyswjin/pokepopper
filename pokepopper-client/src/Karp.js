import React, { Component } from 'react'

export default class Karp extends Component {

    state = {
        class: 'karp'
    }

    clickHandler = () => {
        console.log('bam')
        this.setState({ class: 'karp-fast'})

        setTimeout(()=> this.setState({ class: 'karp'}), 4000)
    }

    render() {
        return (
        <div>
            <img className={this.state.class} onClick={this.clickHandler} src={ this.props.imgUrl} alt="magikarp"/>
        </div>
        )
    }
}
