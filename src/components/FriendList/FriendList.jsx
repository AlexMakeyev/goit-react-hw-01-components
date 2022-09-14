import FriendListItem from "components/FriendListItem/FriendListItem";

const FriendList = ({friends}) => {
    return (<ul className="friend-list">
    <FriendListItem>{friends}</FriendListItem>
  </ul>)
}

export default FriendList;