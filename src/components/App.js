import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import {Consumer} from './Context';

class App extends Component {
  render() {
    return (
      <Consumer>
        {context => {
          const highScore = context.actions.checkScores();
          return (
              <div className="scoreboard">
                <Header 
                  title="Scoreboard"
                />
                {/* Players list */}
                {context.players.map( (player, index) =>
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
        }}
      </Consumer>
    )
  }
}

export default App;
