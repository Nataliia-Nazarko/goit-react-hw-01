// src/components/App.jsx

import "../components/App.css";
import Profile from "./Profile/Profile.jsx";
import userData from "../jsonComponents/userData.json";
import FriendList from "./FriendList/FriendList.jsx";
import friends from "../jsonComponents/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import transactions from "../jsonComponents/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
