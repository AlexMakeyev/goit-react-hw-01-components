
import {Item, Status, Avatar, Name} from './FriendlistItem.styled';
const
  FriendListItem = ({ avatar, name, isOnline, id }) => {
  return <Item key={id}>
    <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
</Item>
}
  
    
export default FriendListItem;