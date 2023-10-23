import { v4 as uuid4 } from "uuid";
import { USER_MARKER } from "../utils";

const Board = ({ board, cellClickHandler }) => {
  function onCellClickHandler(e, ri, ci) {
    cellClickHandler(ri, ci);
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-6 justify-content-center align-items-center">
          {board.map((r, ri) => (
            <div
              className="row justify-content-center align-items-center"
              key={uuid4()}
            >
              {r.map((c, ci) => (
                <div
                  className="card border border-dark board-cell"
                  key={uuid4()}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  onClick={(e) => onCellClickHandler(e, ri, ci)}
                >
                  <div
                    className="d-flex justify-content-center align-items-center h-100 w-100"
                    style={{
                      fontSize: "50px",
                      color: c === USER_MARKER ? "green" : "indigo",
                    }}
                  >
                    {c}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
