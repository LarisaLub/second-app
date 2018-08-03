import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Article from "./Article";
import articles from "./constants/articles";

class App extends Component {
    state = {
        gameIndices: []
    };
    componentWillMount() {
        this.getPocemon();
    }
    getPocemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/1/")
            .then(response => {
                console.log("response", response);
                return response.json();
            })
            .then(data => {
                console.log("data", data);
                this.setState({
                    gameIndices: data.game_indices
                });
            });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Map</h1>
                </header>
                <div>
                    {this.state.game_indices.map((item, index) => {
                        return <p key={index}>{item.version.url}</p>;
                    })}
                </div>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <div>
                    {articles.map((article, index) => {
                        return (
                            <div key={index}>
                                <Article article={article} foo="bar" />
                                <Counter count={5} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;
