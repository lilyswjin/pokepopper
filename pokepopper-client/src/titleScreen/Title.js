import React, { Component } from 'react';
import './Title.css';
import Karp from '../Karp';

export default class Title extends Component {
  render() {
    return (
        <div className="animate">
            <span>P</span><span>o</span><span>K</span><span>é</span><span>P</span><span>o</span><span>P</span><span>P</span><span>e</span><span>R</span>
            <div className="tagline">
              <p>Gotta Pop 'em All!</p>
              <p className="instructions">Pop all the 💦 Pokémon!</p>
            </div>
            <Karp imgUrl={'./assets/magikarpgif.gif'} />
        </div>
    )
  }
}
