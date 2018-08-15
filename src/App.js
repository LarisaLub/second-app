import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import PokemonCard from "./PokemonCard";
//import Article from "./Article";
//import articles from "./constants/articles";

import axios from "axios";

export const getPocemons = async () => {
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0");

    const arrayofPokemons = data.data.results;

    const final = arrayofPokemons.map(ele => {
        return { ...ele, id: ele.url.slice(34, -1) };
    });
    return final;
};

class App extends Component {
    state = {
        gameIndices: [],
        images: {},
        pokemons: []
    };

    componentDidMount() {
        getPocemons().then(data => this.setState({ pokemons: data }));
    }

    render() {
        console.log(this.state.pokemons);
        return (
            <div className="App">
                {this.state.pokemons.map(pokemon => (
                    <PokemonCard
                        name={pokemon.name}
                        url={pokemon.url}
                        key={pokemon.id}
                        id={pokemon.id}
                    />
                ))}
            </div>
        );
    }
}

export default App;
