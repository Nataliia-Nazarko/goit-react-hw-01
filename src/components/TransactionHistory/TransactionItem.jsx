import css from "../TransactionHistory/TransactionItem.module.css";

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.column1}>{type}</td>
      <td className={css.column2}>{amount}</td>
      <td className={css.column3}>{currency}</td>
    </>
  );
};

export default TransactionItem;
