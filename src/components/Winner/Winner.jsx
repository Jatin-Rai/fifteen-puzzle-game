/* eslint-disable react/prop-types */

import Button from '../Button/Button';
import './Winner.css';

// Winner component to display a winning message and reset button when the puzzle is solved
// Props:
// - numbers: Array of tile objects containing value and index
// - reset: Function to reset the game
// - moves: Number of moves made by the player
const Winner = ({ numbers, reset, moves }) => {
    
    // Check if all tiles are in the correct position.
    // Returns null if the puzzle is not solved
    if (!numbers.every(n => n.value === n.index + 1))
        return null; 

    return (
        <div className="winner">
            <p>You win!</p>
            <p>Total moves made: {moves}</p>
            <Button action={reset} title="Play again" />
        </div>
    );
};

export default Winner;
