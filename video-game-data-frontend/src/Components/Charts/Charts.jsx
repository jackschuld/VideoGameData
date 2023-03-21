import GameChart from '../GameChart/GameChart.jsx'
import AnalysisChart from '../AnalysisChart/AnalysisChart.jsx'
import BonusChart from '../BonusChart/BonusChart.jsx';
import '../Charts/Charts.css'

const Charts = ({ videoGames }) => {
    return ( 
        <div>
            <GameChart videoGames={videoGames} />
            <AnalysisChart videoGames={videoGames} />
            <BonusChart videoGames={videoGames}/>
        </div>
     );
}
 
export default Charts;