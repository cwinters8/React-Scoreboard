const players = [
    {
        id: 1,
        name: "Clark",
        score: 50
    },
    {
        id: 2,
        name: "Chase",
        score: 50
    },
    {
        id: 3,
        name: "Skyler",
        score: 50
    },
    {
        id: 4,
        name: "Michal",
        score: 50
    }
]

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
        <Counter score={props.score} />
    </div>
);

const Counter = props => (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> + </button>
    </div>
)

const App = props => (
    <div className="scoreboard">
        <Header
            title="Scoreboard"
            totalPlayers={props.initialPlayers.length}
        />

        {/* Player list */}
        {props.initialPlayers.map(player => {
            return (
                <Player
                    name={player.name}
                    score={player.score}
                    key={player.id.toString()}
                />
            )
        })}
    </div>
)

ReactDOM.render(
    // references the Header component from above
    <App initialPlayers={players} />,
    document.getElementById('root')
);