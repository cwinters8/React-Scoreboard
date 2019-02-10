import React from 'react';

const Stats = props => {
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{props.players.length}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{
                        props.players.reduce((total, player) => {
                            return total += player.score;
                        }, 0)
                    }</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;