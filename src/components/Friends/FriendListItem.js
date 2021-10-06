import PropTypes from "prop-types";

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className="Friends__item">
      <span
        className={
          isOnline
            ? "Friends__status Friends__status--online"
            : "Friends__status Friends__status--offline"
        }
      ></span>
      <img className="Friends__avatar" src={avatar} alt="avatar" width="60" />
      <p className="Friends__name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
