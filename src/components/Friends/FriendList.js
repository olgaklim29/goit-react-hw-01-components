import "./Friends.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className="Friends">
      {friends.map((item) => (
        <FriendListItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
}
