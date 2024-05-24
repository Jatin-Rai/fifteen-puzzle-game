import Board from "./components/Board/Board"
import Instruction from "./components/Instruction/Instruction"


function App() {

  return (
    <div className="App">
      <Instruction />
      <h1 className="heading">15 Puzzle</h1>
      <Board />
    </div>
  )
}

export default App
