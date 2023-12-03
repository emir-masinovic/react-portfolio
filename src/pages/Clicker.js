import "../css/clicker.css";
import { useState, useEffect } from "react";
import ClickerModal from "../components/ClickerModal";
import ClickerTable from "../components/ClickerTable";
import clickerPromises from "../lib/ClickerPromises";
import sound from "../sounds/droplet.mp3";

const login = clickerPromises[0];
const setName = clickerPromises[1];
const incrementClick = clickerPromises[2];
const getLeaderboard = clickerPromises[3];

let soundCounter = 0;
let toggleSound = false;
const clickSound = new Audio(sound);

export default function Clicker() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [player, setPlayer] = useState({
    PlayFabId: "",
    DisplayName: "New Player",
    StatValue: 0,
    Position: "",
  });

  useEffect(() => {
    const letsLogIn = async () => {
      await login("background");
      const newLeaderboard = await getLeaderboard();
      setLeaderboard(newLeaderboard);
      setPlayer({ ...player, Position: Object.keys(newLeaderboard).length });
    };
    letsLogIn();
  }, []);

  const loginAndGetLeaderboard = async ({ DisplayName, PlayFabId }) => {
    const playerId = await login(PlayFabId);
    const displayName = DisplayName;

    let flag = false;
    await setName(displayName).catch((response) => {
      alert("Error: " + response.errorMessage + "\nPick a different name");
      flag = !flag;
    });
    if (flag) {
      return;
    }

    let newLeaderboard = await getLeaderboard();
    const playerIndex = newLeaderboard.findIndex(
      (item) => item.PlayFabId === playerId
    );

    if (playerIndex !== -1) {
      setLeaderboard(newLeaderboard);
      setPlayer(newLeaderboard[playerIndex]);
      document.body.classList.toggle("clicker-modal-hide");
      return;
    }

    let newPlayer = {
      ...player,
      PlayFabId: playerId,
      DisplayName: displayName,
      Position: player.Position + 1,
    };
    setPlayer(newPlayer);
    setLeaderboard([...newLeaderboard, newPlayer]);
    document.body.classList.toggle("clicker-modal-hide");
  };

  const click = (event) => {
    if (event.target.className === "btn") {
      return;
    }

    incrementClick();
    createClickShapes(event);
    clickSound.play();
    soundCounter++;
    if (toggleSound === true) {
      clickSound.playbackRate = 7;
    }
    if (toggleSound === false) {
      clickSound.playbackRate = 8;
    }
    if (soundCounter === 10) {
      soundCounter = 0;
      toggleSound = !toggleSound;
    }

    let playerIndex = leaderboard.findIndex(
      (item) => item.PlayFabId === player.PlayFabId
    );
    leaderboard[playerIndex].StatValue = player.StatValue + 1;
    leaderboard.sort((a, b) => b.StatValue - a.StatValue);
    leaderboard.forEach((item, i) => {
      item.Position = i;
    });
    setLeaderboard(leaderboard);
    playerIndex = leaderboard.findIndex(
      (item) => item.PlayFabId === player.PlayFabId
    );
    setPlayer({ ...leaderboard[playerIndex] });
  };

  const createClickShapes = (event) => {
    const dot1 = document.createElement("div");
    const dot2 = document.createElement("div");
    const container = document.createElement("div");
    dot1.classList.add("dot1");
    dot2.classList.add("dot2");
    container.setAttribute("id", "circle-container");
    container.style.left = `${event.pageX}px`;
    container.style.top = `${event.pageY}px`;
    container.append(dot1, dot2);
    document.body.append(container);

    setTimeout(() => {
      dot1.remove();
      dot2.remove();
      container.remove();
    }, 2000);
  };

  return (
    <>
      <ClickerModal func={loginAndGetLeaderboard}></ClickerModal>
      <div className="clicker-container" onPointerDown={click}>
        <div className="clicker-buttons">
          <button
            className="btn"
            onPointerDown={(event) => {
              event.preventDefault();
              document.body.classList.toggle("clicker-table-hide");
            }}
          >
            Hide Leaderboard
          </button>
          <button
            className="btn"
            onPointerDown={(event) => {
              event.preventDefault();
              document.body.classList.toggle("clicker-modal-hide");
            }}
          >
            Change Name
          </button>
        </div>
        <ClickerTable leaderboard={leaderboard} player={player} />
      </div>
    </>
  );
}
