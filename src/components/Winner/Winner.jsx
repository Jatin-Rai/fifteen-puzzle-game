/* eslint-disable react/prop-types */

import Button from '../Button/Button'
import './Winner.css'

const Winner = ({ numbers, reset, moves }) => {
    if (!numbers.every(n => n.value === n.index + 1))
        return null

    return (
        <div className="winner">
            <p>You win!</p>
            <p>Total moves made: {moves}</p>
            <Button action={reset} title="Play again" />
        </div>
    )
}

export default Winner