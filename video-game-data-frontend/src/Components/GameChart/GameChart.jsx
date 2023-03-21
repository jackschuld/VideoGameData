import { Chart } from "react-google-charts";

const GameChart = ({ videoGames }) => {
  function generateDataFormChart() {
    // Games from 2013 and newer
    let filteredGames = videoGames.filter((game) => game.year >= 2013);

    let platforms = filteredGames.map((game) => {
      return game.platform;
    });

    let distinctPlatforms = [...new Set(platforms)];

    let platformArrays = distinctPlatforms.map((platform) => {
      let gameSales = 0;
      for (let i = 0; i < filteredGames.length; i++) {
        if (filteredGames[i].platform === platform) {
          gameSales += filteredGames[i].globalsales;
        }
      }

      return [platform, gameSales, "blue"];
    });

    const data = [
      ["Platform", "Global Sales", { role: "style" }],
      ...platformArrays,
    ];

    return data;
  }

  const options = {
    chart: {
      title: "Platform by Global Sales in Millions",
      subtitle: "Data: 2013-2016",
    },
  };

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={generateDataFormChart()}
      options={options}
    />
  );
};

export default GameChart;
