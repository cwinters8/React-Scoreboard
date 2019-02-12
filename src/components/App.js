import React, {Component} from 'react';
import {Provider} from './Context';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
        isHighest: false
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
        isHighest: false
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
        isHighest: false
      },
      {
        name: "James",
        score: 0,
        id: 4,
        isHighest: false
      }
    ]
  };

  // player ID counter
  prevPlayerId = this.state.players.reduce((id, player) => {
    if (player.id > id) {
      id = player.id;
    }
    return id;
  }, 0);

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  checkScores = () => {
    // get highest score
    return this.state.players.reduce((topScore, player) => {
      if (player.score > topScore) {
        topScore = player.score;
      }
      return topScore;
    }, 1)
  }

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highScore = this.checkScores();
    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header 
            title="Scoreboard"
          />
    
          {/* Players list */}
          {this.state.players.map( (player, index) =>
            <Player 
              name={player.name}
              score={player.score}
              isHighest={highScore === player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}           
            />
          )}
          <AddPlayerForm addPlayer={this.handleAddPlayer}/>
        </div>
      </Provider>
    );
  }
}

export default App;
