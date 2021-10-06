import PropTypes from "prop-types";
import "./Statistics.css";
export default function Statistics({ title, stats }) {
  return (
    <section className="Statistics">
      {title && <h2 className="Statistics__title">{title}</h2>}

      <ul className="Statistics__list">
        {stats.map((item) => (
          <li key={item.id} className="Statistics__item">
            <span className="Statistics__label">{item.label}</span>
            <span className="Statistics__percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
