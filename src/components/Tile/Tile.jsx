/* eslint-disable react/prop-types */
import './Tile.css'

// Tile component representing an individual tile in the puzzle
// Props:
// - number: Object containing the value and index of the tile
// - moveTile: Function to move the tile when clicked
const Tile = ({ number, moveTile }) => (
    <div
        onClick={() => moveTile(number)}
        className={`number ${number.value === number.index + 1 ? 'correct' : ''} ${number.value === 16 ? 'disabled' : ''} slot--${number.index}`}
    >
        {number.value === 16 ? '' : number.value}
    </div>
);

export default Tile;
