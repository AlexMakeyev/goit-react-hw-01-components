import PropTypes from 'prop-types';
import { Title } from './StatTitle/StatTitle'
import { StatList, StatisticsSection, StatItem, StatLabel, StatInfo } from './Statistics.styled';
const Statistics = ({ stats, title }) => {
     return  <StatisticsSection>
       {title &&
         <Title title={title} />}
  <StatList>
         {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatInfo>{percentage}</StatInfo>
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