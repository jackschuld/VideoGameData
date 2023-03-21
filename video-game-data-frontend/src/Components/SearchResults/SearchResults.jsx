import React from "react";
import GameDetails from "../GameDetails/GameDetails";
import "../SearchResults/SearchResults.css";
import Button from "react-bootstrap/Button";

const SearchResults = ({
  filteredGames,
  selectedGame,
  setSelectedGame,
  videoGames,
}) => {
  function handleGameCLick(game) {
    if (selectedGame === game) {
      setSelectedGame(null);
    } else {
      setSelectedGame(game);
    }
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Game Title</th>
          </tr>
        </thead>
        <tbody>
          {filteredGames.map((game) => {
            return (
              <div>
                <tr key={game.id} className="game-result">
                  <td>{game.name}</td>
                  <GameDetails
                    selectedGame={selectedGame}
                    game={game}
                    videoGames={videoGames}
                  />
                  <td>
                    <Button
                      variant="dark"
                      onClick={() => handleGameCLick(game)}
                    >
                      See Details
                    </Button>
                  </td>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
