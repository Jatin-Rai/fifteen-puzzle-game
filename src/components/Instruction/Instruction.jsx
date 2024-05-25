import "./Instruction.css";

// Instruction component to display game instructions to the user
const Instruction = () => {
    return (
        <div className='instruction'>
            <h2>INSTRUCTIONS</h2>
            <p>
                To win, move the tiles in the grid to order them from 1 to 15 in ascending order.
                You can click on it or use your arrow keys to move the tiles.
                <br/>
                Enjoy solving😊
            </p>
        </div>
    )
}

export default Instruction;