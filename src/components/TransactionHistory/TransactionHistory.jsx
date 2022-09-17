import {Table, THead, TElement} from './TransactionHistory.styled'
import PropTypes from 'prop-types';
const TransactionHistory =({items}) => {
    return(<Table>
    <THead>
    <tr>
      <TElement>Type</TElement>
      <TElement>Amount</TElement>
      <TElement>Currency</TElement>
    </tr>
  </THead>
  
    <tbody>
    {
        items.map(({id, type, amount, currency}) => 
        (<tr key={id}>
            <TElement>{type}</TElement>
            <TElement>{amount}</TElement>
            <TElement>{currency}</TElement>
          </tr>)

        )}
    </tbody>
  </Table>)
}

export default TransactionHistory;

TransactionHistory.propTypes ={
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            amount:PropTypes.string.isRequired,
        })
    )
}