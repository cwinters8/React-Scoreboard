// Header component. Components must be capitalized to differentiate between custom components and native DOM elements
const Header = props => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = props => (
    <div className="player">
        <span className="playerName">{props.name}</span>
        <Counter />
    </div>
);

class Counter extends React.Component {
    state = {
        score: 0
    }

    decrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score - 1
        }));
    }

    incrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        players: [
            {
                id: 1,
                name: 'Clark'
            },
            {
                id: 2,
                name: 'Michal'
            },
            {
                id: 3,
                name: 'Chase'
            },
            {
                id: 4,
                name: 'Skyler'
            }
        ]
    }

    removePlayer = (id) => {
        this.setState(prevState => ({
            players: prevState.players.filter(player => player.id !== id)
        }));
    }

    render() {
        const players = this.state.players;
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={players.length}
                />

                {/* Make player components */}
                {players.map(player => {
                    return (
                        <Player
                            name={player.name}
                            id={player.id}
                            key={player.id.toString()}
                            removePlayer={this.removePlayer}
                        />
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(
    // references the Header component from above
    <App />,
    document.getElementById('root')
);