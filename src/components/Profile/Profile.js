import PropTypes from "prop-types";
import defaultImg from "../../img/no-image.jpg";
import "./Profile.css";
export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="Profile">
      <div className="Profile__description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="Profile__avatar"
        />
        <p className="Profile__name">{name}</p>
        <p className="Profile__tag">@{tag}</p>
        <p className="Profile__location">{location}</p>
      </div>

      <ul className="Profile__stats">
        <li className="Profile__item">
          <span className="Profile__label">Followers</span>
          <span className="Profile__quantity">{stats.followers}</span>
        </li>
        <li className="Profile__item">
          <span className="Profile__label">Views</span>
          <span className="Profile__quantity">{stats.views}</span>
        </li>
        <li className="Profile__item">
          <span className="Profile__label">Likes</span>
          <span className="Profile__quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = { avatar: defaultImg };

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
