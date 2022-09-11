import Profile from 'components/Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendListItem/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          />
      </div>
      <div>
          <Statistics title="Upload stats" stats={data} />
      </div>
      <div>

      <FriendList friends={friends} />
      </div>

      <div>

      <TransactionHistory items={transactions} />;
      </div>
     
      

    </div>
  );
};
