import css from './Friends.module.css'

export const FriendList = ({ friends }) => (
    <ul className={css.friend_list}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);


const FriendListItem = ({ avatar, name, isOnline, id }) => (
    <li className={css.friend_item} key={id}>
        <span style={{ backgroundColor: isOnline ? 'green' : 'red' }} className={css.friend_status}>{isOnline}</span>
        <img className={css.friend_avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.friend_name}>{name}</p>
    </li>
);