import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./Friends/FriendList";
import Transactions from "./Transactions/Transactions";
import user from "./Profile/user.json";
import statisticalData from "./Statistics/statistical-data.json";
import friendsData from "./Friends/friends.json";
import transactionsData from "./Transactions/transactions.json";

export default function App() {
  return (
    <div className="container">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsData} />
      <Transactions rows={transactionsData} />
    </div>
  );
}
