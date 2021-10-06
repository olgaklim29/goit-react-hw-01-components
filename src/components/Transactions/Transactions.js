import PropTypes, { arrayOf } from "prop-types";
import "./Transaction.css";

export default function Transactions({ rows }) {
  return (
    <table className="Transaction">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  rows: arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
