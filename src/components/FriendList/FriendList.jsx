import FriendListItem from "./FriendListItem.jsx";
import css from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
