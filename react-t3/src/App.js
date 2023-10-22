import { useState } from "react";
import Board from "./components/Board";
import { USER_MARKER, autoPlayNextMove, cloneObject } from "./utils";

function App() {
  const [data, setData] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);

  function cellClickHandler(ri, ci) {
    setData((p) => {
      const data = cloneObject(p);
      if (data[ri][ci] !== " ") return data;
      data[ri][ci] = USER_MARKER;
      return autoPlayNextMove(data);
    });
  }

  return (
    <div className="page page-body">
      <div className="container-fluid">
        <div className="h1 text-center mb-4">Tic-Tac-Toe</div>
        <div className="text-center">
          <Board data={data} cellClickHandler={cellClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
