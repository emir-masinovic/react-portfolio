import "../css/clickertable.css"

export default function ClickerTable({ leaderboard, player }) {
    return (
        <div className="clicker-table-container">
            <table className="clicker-table">
                <thead>
                    <tr >
                        <th>#</th>
                        <th>Name</th>
                        <th className="score">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.slice(0, 10).map(leaderboardPlayers =>
                    (<tr key={leaderboardPlayers.PlayFabId} >
                        <td>{leaderboardPlayers.Position + 1}</td>
                        <td className="player-name">{leaderboardPlayers.DisplayName}</td>
                        <td >{leaderboardPlayers.StatValue}</td>
                    </tr>))}
                    <tr className="clicker-empty-container">
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr key={player.PlayFabId + player.DisplayName}>
                        <td>{player.Position + 1}</td>
                        <td className="player-name">{player.DisplayName}</td>
                        <td >{player.StatValue}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}