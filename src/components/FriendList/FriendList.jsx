import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
