import css from "../FriendList/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="80" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.statusonline : css.statusoffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
