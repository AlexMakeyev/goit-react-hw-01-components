import PropTypes from 'prop-types';
const Statistics = ({ stats }) => {
     return  <section className="statistics">
  
  <ul className="stat-list">
  {stats.map(({id, label, percentage}) => (<li key={id} className="item">
  <span className="label">{label}</span>
  <span className="percentage">{percentage}</span>
  </li>))}
    
    
  </ul>
</section>  
}

Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
}    
    


export default Statistics;