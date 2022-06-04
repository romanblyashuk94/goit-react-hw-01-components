import s from './App.module.css';
import user from '../data/user.json';
import statisticData from '../data/statisticData.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className={s.appWrapper}>
      <Profile
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        username={user.username}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
