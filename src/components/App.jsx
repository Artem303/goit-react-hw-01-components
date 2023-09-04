// export const App = () => {
//   return
//   (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Profile } from './Profile/Profile';
import { StatisticsCard } from './Statistics/StatisticsCard';
import { Friends } from './Friends/Friends';
import { Transactions } from './Transactions/Transactions';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <StatisticsCard props={data}></StatisticsCard>
      <Friends friendsList={friends} />
      <Transactions
        props={transactions}
        type="Type"
        amount="Amount"
        currency="Currency"
      />
    </div>
  );
};
