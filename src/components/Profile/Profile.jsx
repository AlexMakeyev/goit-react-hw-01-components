import PropTypes from 'prop-types';
import { Container, Description, Avatar, Name, Tag, Location, Stats, StatsInfo, Followers, FollowersInfo, Views, ViewsInfo, Likes, LikesInfo } from './Profile.styled';
const Profile = ({ username, tag, location, avatar, stats }) => {
    return <Container>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <StatsInfo>
      <Followers>Followers</Followers>
      <FollowersInfo>{stats.followers}</FollowersInfo>
    </StatsInfo>
    <StatsInfo>
      <Views>Views</Views >
      <ViewsInfo>{stats.views}</ViewsInfo>
    </StatsInfo>
    <StatsInfo>
      <Likes>Likes</Likes>
      <LikesInfo>{stats.likes}</LikesInfo>
    </StatsInfo>
  </Stats>
</Container>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    })  
}
export default Profile