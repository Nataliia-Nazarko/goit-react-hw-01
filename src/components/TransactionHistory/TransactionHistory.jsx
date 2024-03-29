import TransactionItem from "./TransactionItem.jsx";
import css from "../TransactionHistory/TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th className={css.ttitle}>Type</th>
          <th className={css.ttitle}>Amount</th>
          <th className={css.ttitle}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.line} key={item.id}>
              <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.number,
};
export default TransactionHistory;
