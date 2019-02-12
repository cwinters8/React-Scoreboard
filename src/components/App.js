import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {

  render() {
    const highScore = this.checkScores();
    return (
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
            />
          )}
          <AddPlayerForm/>
        </div>
    );
  }
}

export default App;
