import "../css/clickermodal.css"
import { useState } from "react"

export default function ModalLogin(userLogin) {

    const [username, setUsername] = useState("")
    const [playerID, setID] = useState("")

    const handleClick = (event) => {
        event.preventDefault()
        if (playerID.length < 3) { return alert("ID must be between 3 and 25 characters") }
        userLogin.func({ DisplayName: username, PlayFabId: playerID })
    }

    function modalWarning(event) {
        if (event.target.className === "clicker-modal-container") {
            document.body.classList.toggle("clicker-modal-warning")
            setTimeout(() => { document.body.classList.toggle("clicker-modal-warning") }, 300)
        }
    }

    return (
        <div className="clicker-modal-container" onPointerDown={modalWarning}>
            <div className="clicker-modal">
                <div className="clicker-modal-header">
                    <input
                        type="text"
                        placeholder="Name"
                        value={username}
                        onChange={(event) => { setUsername(event.target.value) }}
                        onKeyDown={(event) => { if (event.keyCode === 13) { handleClick(event) } }}
                    />
                    <input
                        type="text"
                        placeholder="ID"
                        value={playerID}
                        onChange={(event) => { setID(event.target.value) }}
                        onKeyDown={(event) => { if (event.keyCode === 13) { handleClick(event) } }}
                    />
                    <button className="btn" onClick={handleClick} >Accept</button>
                </div>
                <div className="clicker-modal-footer">
                    <p>Don't forget your ID</p>
                </div>
            </div>
        </div>
    )
}
