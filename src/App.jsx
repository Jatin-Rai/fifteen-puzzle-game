import Board from "./components/Board/Board";
import Instruction from "./components/Instruction/Instruction";

// App component serving as the root of the application
function App() {
  return (
    <div className="App">
      {/* Instruction component for providing game instructions */}
      <Instruction />

      {/* Heading for the 15 Puzzle Game */}
      <h1 className="heading">15 Puzzle Game</h1>

      {/* Board component for rendering the puzzle game board */}
      <Board />
    </div>
  );
}

export default App;
