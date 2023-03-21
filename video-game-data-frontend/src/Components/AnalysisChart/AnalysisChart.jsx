import { Chart } from "react-google-charts";

const AnalysisChart = ({ videoGames }) => {
  function generateDataFormChart() {
    
    // Games before the year 2000
    let filteredGames = videoGames.filter(game => game.year < 2000);

    let platforms = filteredGames.map(game => {
        return game.platform
    });
    
    let distinctPlatforms = [...new Set(platforms)]
    
    let platformArrays = distinctPlatforms.map(platform => {

        let gameSales = 0;
        for (let i = 0; i < filteredGames.length; i++ ){
            if (filteredGames[i].platform === platform) {
            gameSales += filteredGames[i].globalsales}
        }
        return [platform, gameSales]
    });

    const data = [
        ["Platform", "Global Sales"],
        ...platformArrays
      ];
      return data;
  }

  const options = {
    chart: {
      title: "What Did Video Game Market Pre-2000s Look Like?",
      subtitle: "Data: 1980-2000",
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

export default AnalysisChart;
