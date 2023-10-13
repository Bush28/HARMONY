// import React from 'react';
// import './Dashboard.css';

// export default function Dashboard({users}){
//     return (
//         <div className="dashboard">
//             <h1>Account Dashboard</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Username</th>
//                         <th>Balance</th>
//                         <th>Spouse</th>
//                         <th>Joint Balance</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={index}>
//                             <td>{user.username}</td>
//                             <td>{user.balance}</td>
//                             <td>{user.spouse}</td>
//                             <td>{user.jointBalance}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };











// import React from 'react';
// import './Dashboard.css';


// export default function Dashboard({ users }) {
//     return (
//         <div className="dashboard">
//             <h1>Your Accounts Dashboard</h1>
//             <div className="account-list">
//                 {users.map((user, index) => (
//                     <div className="account-card" key={index}>
//                         <h3>{user.username}</h3>
//                         <p>Balance: ${user.balance}</p>
//                         {user.spouse && <p>Spouse: {user.spouse}</p>}
//                         {user.jointBalance && <p>Joint Balance: ${user.jointBalance}</p>}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>

            <div className='dashboard-box'>
                <Link to='/jointaccount'>Joint Account</Link>
            </div>
            <div className='dashboard-box'>
                <Link to='/youraccount'>Your Account</Link>
            </div>
            <div className='dashboard-box'>
                <Link to='/ask'>Financial Advisor</Link>
            </div>
            <div className='dashboard-box'>
                <Link to='/incometracker'>Income Tracker</Link>
            </div>
        </div>
    );
};

export default Dashboard;