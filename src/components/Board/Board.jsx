import { useEffect, useState } from "react";

import './Board.css';

import Overlay from "../Overlay/Overlay";
import Tile from "../Tile/Tile";
import Winner from "../Winner/Winner";
import Button from "../Button/Button.jsx";
import Message from "../Message/Message.jsx";

import { shuffle, isSolvable } from "../../utils/utils.js";

const Board = () => {
    const [numbers, setNumbers] = useState([]);
    const [animating, setAnimating] = useState(false);
    const [solvable, setSolvable] = useState(true);
    const [moves, setMoves] = useState(0);

    // Function to initialize and reset the puzzle board
    const reset = () => {
        const newNumbers = shuffle();
        setNumbers(newNumbers);
        setSolvable(isSolvable(newNumbers));
        setMoves(0);
    };

    // Function to move a tile if it is adjacent to the empty space (16)
    const moveTile = tile => {
        const i16 = numbers.find(n => n.value === 16).index;
        if (![i16 - 1, i16 + 1, i16 - 4, i16 + 4].includes(tile.index) || animating)
            return;

        const newNumbers =
            [...numbers]
                .map(number => {
                    if (number.index !== i16 && number.index !== tile.index)
                        return number;
                    else if (number.value === 16)
                        return { value: 16, index: tile.index };

                    return { value: tile.value, index: i16 };
                });
        setAnimating(true);
        setNumbers(newNumbers);
        setMoves(prevMoves => prevMoves + 1);
        setTimeout(() => setAnimating(false), 200);
    };

    // Function to move a random adjacent tile to the empty space (16) as a hint
    const helpMe = () => {
        const i16 = numbers.find(n => n.value === 16).index;
        const row = Math.floor(i16 / 4);

        const adjacentTiles = [
            numbers.find(n => n.index === i16 - 1 && Math.floor((n.index) / 4) === row),
            numbers.find(n => n.index === i16 + 1 && Math.floor((n.index) / 4) === row),
            numbers.find(n => n.index === i16 - 4),
            numbers.find(n => n.index === i16 + 4)
        ].filter(tile => tile);

        const randomTile = adjacentTiles[Math.floor(Math.random() * adjacentTiles.length)];

        moveTile(randomTile);
    };

    // Function to handle arrow key inputs for moving tiles
    const handleKeyDown = e => {
        const i16 = numbers.find(n => n.value === 16).index;
        if (e.keyCode === 37 && !(i16 % 4 === 3))
            moveTile(numbers.find(n => n.index === i16 + 1));
        else if (e.keyCode === 38 && !(i16 > 11))
            moveTile(numbers.find(n => n.index === i16 + 4));
        else if (e.keyCode === 39 && !(i16 % 4 === 0))
            moveTile(numbers.find(n => n.index === i16 - 1));
        else if (e.keyCode === 40 && !(i16 < 4))
            moveTile(numbers.find(n => n.index === i16 - 4));
    };

    // Effect to add and clean up the keydown event listener
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => { document.removeEventListener('keydown', handleKeyDown) };
    });

    // Effect to initialize the puzzle on component mount
    useEffect(reset, []);

    return (
        <div className="game">
            {!solvable && <Message message="Not solvable! Click on Shuffle to shuffle the grid" />}
            <div className="moves">Moves: {moves}</div>
            <div className="board">
                <Overlay size={16} />
                {numbers.map((x, i) => {
                    return <Tile key={i} number={x} moveTile={moveTile} />;
                })}
            </div>
            <div className="button-wrapper">
                <Button action={helpMe} title="Help Me" />
                <Button action={reset} title="Shuffle" />
            </div>
            <Winner numbers={numbers} reset={reset} moves={moves} />
        </div>
    );
}

export default Board;
