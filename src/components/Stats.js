import React from 'react';
import { Consumer } from './Context';

const Stats = () => {
    return (
        <Consumer>
            {context => {
                return (
                    <table className="stats">
                        <tbody>
                            <tr>
                                <td>Players:</td>
                                <td>{context.length}</td>
                            </tr>
                            <tr>
                                <td>Total Points:</td>
                                <td>{
                                    context.reduce((total, player) => {
                                        return total += player.score;
                                    }, 0)
                                }</td>
                            </tr>
                        </tbody>
                    </table>
                );
            }}
        </Consumer>

    );
}

export default Stats;