import React from 'react';

const Stats = ({players}) => {
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{players.length}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{
                        players.reduce((total, player) => {
                            return total += player.score;
                        }, 0)
                    }</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;