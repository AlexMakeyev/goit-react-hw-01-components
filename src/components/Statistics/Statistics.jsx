import PropTypes from 'prop-types';
import { Title } from './StatTitle'
import { StatList, StatisticsSection, StatItem, StatLabel, StatInfo } from './Statistics.styled';
const Statistics = ({ stats, title }) => {
     return  <StatisticsSection className="statistics">
  <Title title = {title}/>
  <StatList>
  {stats.map(({id, label, percentage}) => (<StatItem key={id} className="item">
  <StatLabel className="label">{label}</StatLabel>
  <StatInfo className="percentage">{percentage}</StatInfo>
  </StatItem>))}
    
    
  </StatList>
</StatisticsSection>  
}

Statistics.propTypes = {
  
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
  
}    
    


export default Statistics;