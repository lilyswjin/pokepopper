import React, { Component } from 'react'
import {animals} from './Utils';

export default class FishMenu extends Component {

  render() {
    let pokeList = animals
      .sort((a, b) => b.pt - a.pt)
      .map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <img src={pokemon.url} alt='pokemon' height='60rem' width='60rem'></img> <span>: {pokemon.pt} pts</span>
          </div>
        );
    })

    return (
        <div className="fishmenu">
          <button>PokéDex</button>
          <div className="fishmenu__items">
            {pokeList}
          </div>
        </div>
      )
    }
}
