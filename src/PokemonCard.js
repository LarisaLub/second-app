import React, { Component } from "react";

//export const getPocemons =;

class PokemonCard extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p className="pokemon-name">{this.props.name}</p>
                {/* <img src={this.props.url} height="100pх" /> */}
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        this.props.id
                    }.png`}
                />
            </div>
        );
    }
}

export default PokemonCard;
{
    /* <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    this.props.id
                }.png`}
            /> */
}
