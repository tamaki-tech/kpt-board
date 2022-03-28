import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div style={{ display: "flex" }} >
      <Board label="Keep"></Board>
      <Board label="Probrem"></Board>
      <Board label="Try"></Board>
    </div>
  );
}

export default App;
