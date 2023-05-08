import "../css/ttt.css"
import TTTModal from "../components/TTTModal";
import { useState } from "react";

let cellArrayInitialized = [];

for (let i = 1; i <= 9; i++) {
    const obj = { id: i, value: { i } };
    cellArrayInitialized.push(obj);
}

export default function TTT() {
    const [cellArray, setCellArray] = useState(cellArrayInitialized);
    const [messageBoard, setMessageBoard] = useState("Status board");

    return (
        <>
            <TTTModal />
            <div className="ttt">
                <div className="status-board">{messageBoard}</div>
                <div className="tic-tac-toe-table">
                    {cellArray.map((cell) => (
                        <button className="tic-tac-toe-table-button"
                            key={cell.id}
                            onClick={() => { console.log(cell.id) }}>
                            Div {cell.id}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
