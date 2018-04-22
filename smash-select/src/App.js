import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGrid from "./components/imageGrid";

// cd C:\Users\xmobl\Documents\GitRepos\UCIMelee.github.io\smash-select

// Note: Each react-boostrap image button should be its own component.
// Component to show all 6 image buttons in a grid

class App extends Component {
    constructor(props) {
        super(props);
        // 0 = player 0, 1 = player 1
        this.state = { 
            round: 1,  // pass down
            latestWinner: -1, // pass down
            p0: { wins: 0, wonStages: [] }, 
            p1: { wins: 0, wonStages: [] }
        };
    }

    updateMatchData() {
        return 
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Smash Map Select</h1>
                </header>
                
                <ImageGrid matchData={this.state} />
            </div>
        );
    }
}

export default App;
