import React from 'react';
import PropTypes from 'prop-types';

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

Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        length: PropTypes.number,
        score: PropTypes.number
    }))
}

export default Stats;