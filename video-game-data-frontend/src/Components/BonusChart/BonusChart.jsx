import { Chart } from "react-google-charts";

const BonusChart = ({ videoGames }) => {
  // Get Platform Array
  let distinctPlatforms = videoGames.map((game) => {
    return game.platform;
  });
  distinctPlatforms = [...new Set(distinctPlatforms)];

  // Get Publisher Array
  let distinctPublishers = videoGames.map((game) => {
    return game.publisher;
  });
  distinctPublishers = [...new Set(distinctPublishers)];

  let platformArrays = distinctPlatforms.map((platform) => {
    let gameSales = 0;
    for (let i = 0; i < videoGames.length; i++) {
      if (videoGames[i].platform === platform) {
        gameSales += videoGames[i].globalsales;
      }
    }
    let topPublisher = null;
    // Will be used to compare publisher sales
    let highestSales = 0;

    // Loop through each publisher
    for (let i = 0; i < distinctPublishers.length; i++) {
      let publisherPlatformSales = 0;
      let publisherGames = videoGames.filter((game) => {
        return game.publisher === distinctPublishers[i];
      });

      // Loop through each game of current publisher
      for (let i = 0; i < publisherGames.length; i++) {
        if (publisherGames[i].platform === platform) {
          // Add game's sales if platform matches
          publisherPlatformSales += publisherGames[i].globalsales;
        }
      }

      if (publisherPlatformSales > highestSales) {
        highestSales = publisherPlatformSales;
        topPublisher = distinctPublishers[i];
      }
    }
    return [platform + " (" + topPublisher + ") ", gameSales];
  });

  const data = [
    ["Platform (Top Selling Publisher) ", "Total Sales"],
    ...platformArrays,
  ];

  const options = {
    chart: {
      title: "Platform Sales and Top Selling Publishers",
      subtitle: "Sales: 1980-2016",
    },
    bars: "horizontal",
  };

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="800px"
      data={data}
      options={options}
    />
  );
};

export default BonusChart;
