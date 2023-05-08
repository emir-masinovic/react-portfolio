import React, { useState } from "react"
import "../css/tttmodal.css"

export default function TTTModal() {

    const [modalWarningScale, setModalWarningScale] = useState("")

    const handleAI = (event) => {
        event.preventDefault()
        console.log("handleAI")
        document.body.classList.toggle("ttt-modal-hide")
    };

    const handlePlayer = (event) => {
        event.preventDefault()
        console.log("handlePlayer")
        document.body.classList.toggle("ttt-modal-hide")
    };

    const modalWarning = (event) => {
        if (event.target.className === "ttt-model-container") {
            console.log("modalWarning")
            setModalWarningScale("-warning")
            setTimeout(() => { setModalWarningScale("") }, 300);
        }
    }

    return (
        <div className="ttt-model-container" onPointerDown={modalWarning}>
            <div className={"ttt-model" + modalWarningScale}>
                <div className="ttt-modal-header">
                    <h2>Play against</h2>
                </div>
                <div className="ttt-modal-footer">
                    <button className="btn" onClick={handleAI}>AI</button>
                    <button className="btn" onClick={handlePlayer}>Player</button>
                </div>
            </div>
        </div>
    )
}