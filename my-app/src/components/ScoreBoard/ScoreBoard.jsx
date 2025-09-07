import "./ScoreBoard.css";

function ScoreBoard({ players }) {
  return (
    <>
      <table className="score-container">
        <thead>
          <tr>
            <th>Player</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, index) => {
            const total = p.score.reduce((sum, s) => sum + s, 0);
            return (
              <tr key={index}>
                <td>{p.player}</td>
                {p.score.map((s, i) => {
                  return <td key={i}>{s}</td>;
                })}
                <td>{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ScoreBoard;
