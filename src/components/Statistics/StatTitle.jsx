import PropTypes from 'prop-types';
import { StatTitle } from './StatTitle.styled';
export const Title = ({ title }) => {
    return <StatTitle className="title">{title}</StatTitle>
}
 

Title.propTypes = {
    title: PropTypes.string,
}