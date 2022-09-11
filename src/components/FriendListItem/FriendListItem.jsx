import PropTypes from 'prop-types';
const FriendListItem = ({friends}) => {
    return friends.map(({avatar, name, isOnline, id}) => (<li key={id} className="item">
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
    </li>))}
  
    


FriendListItem.propTypes ={
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.string,
    id: PropTypes.string,
}

export default FriendListItem;