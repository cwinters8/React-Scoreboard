import React, {Component} from 'react';

class Stopwatch extends Component {
    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.tick(), 100);
    }

    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({
                previousTime: Date.now()
            })
        }
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState(prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }))
        }
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">0</span>
                <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button>Reset</button>
            </div>
        );
    };
}

export default Stopwatch;