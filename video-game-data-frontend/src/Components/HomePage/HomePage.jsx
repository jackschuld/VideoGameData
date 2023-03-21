import Table from "react-bootstrap/Table";

const HomePage = ({ videoGames }) => {
  let filteredGames = videoGames
    .filter((game) => game.game_rank <= 25)
    .sort((a, b) => a.game_rank - b.game_rank);

  return (
    <Table striped bordered hover variant="">
      <thead>
        <tr>
        <th colSpan={3}><h4>Top 25 Games Of All Time!</h4></th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Game Rank</th>
          <th>Global Sales</th>
        </tr>
      </thead>
      <tbody>
        {filteredGames.map((game) => {
          return (
            <tr key={game.id}>
              <td>{game.name}</td>
              <td>{game.game_rank}</td>
              <td>{game.globalsales}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default HomePage;
