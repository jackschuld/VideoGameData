import React from "react";
import { Chart } from "react-google-charts";

const PieChart = ({ selectedGame, videoGames }) => {
  let filteredGames = videoGames.filter((game) => {
    return game.name === selectedGame.name;
  });

  let platformsArray = filteredGames.map((game) => {
    const { platform, globalsales } = game;
    return [platform, globalsales];
  });

  const data = [["Console", "Global Sales"], ...platformsArray];

  const options = {
    title: "Sales Per Console",
    is3D: true,
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"500px"}
      height={"300px"}
    />
  );
};

export default PieChart;
