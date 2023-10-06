// import React from 'react';
// import './YourAccount.css';

// export default function YourAccount({ user }) {
//     return (
//         <div className="youraccount">
//             <h1>Your Account</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Username</th>
//                         <th>User Income</th>
//                         <th>Partner</th>
//                         <th>Partner Income</th>
//                         <th>Joint Balance</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{user.username}</td>
//                         <td>{user.userIncome}</td>
//                         <td>{user.partner}</td>
//                         <td>{user.partnerIncome}</td>
//                         <td>{user.jointBalance}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }
import React from 'react';
import './YourAccount.css';

export default function YourAccount({users}){
    console.log(users)
    return (
        <div className="youraccount">
            <h1>YourAccount</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Balance</th>
                        <th>Spouse</th>
                        <th>Joint Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.balance}</td>
                            <td>{user.spouse}</td>
                            <td>{user.jointBalance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};