// import React, { useState } from 'react';

// export default function Signup({ attemptSignup }) {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [balance, setBalance] = useState('');
//     const [spouse, setSpouse] = useState('');
//     const [jointBalance, setJointBalance] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         attemptSignup({ username, password, balance, spouse, jointBalance });
//     };

//     return (
//         <div>
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Balance"
//                     value={balance}
//                     onChange={(e) => setBalance(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Spouse "
//                     value={spouse}
//                     onChange={(e) => setSpouse(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Joint Balance "
//                     value={jointBalance}
//                     onChange={(e) => setJointBalance(e.target.value)}
//                 />
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     );
// }
import React, { useState } from 'react';

function Signup({ attemptSignup }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userIncome, setUserIncome] = useState('');
    const [partner, setPartner] = useState('');
    const [partnerIncome, setPartnerIncome] = useState('');
    const [jointBalance, setJointBalance] = useState('');

    const [showUserIncome, setShowUserIncome] = useState(false);
    const [showPartner, setShowPartner] = useState(false);
    const [showPartnerIncome, setShowPartnerIncome] = useState(false);

    const handleSignup = () => {
        attemptSignup({ username, password, userIncome, partner, partnerIncome, jointBalance });
    }


return (
    <div>
        <input type="text" placeholder='Username' onFocus={() => setShowUserIncome(true)} onChange={(e) => setUsername(e.target.value)} />

        {showUserIncome && (
            <input type="number" placeholder='Your Income' onFocus={() => setShowPartner(true)} onChange={(e) => setUserIncome(e.target.value)} />
        )}

        {showPartner && (
            <input type="text" placeholder="Partner's Name" onFocus={() => setShowPartnerIncome(true)} onChange={(e) => setPartner(e.target.value)} />
        )}

        {showPartnerIncome && (
            <>
                <input type="number" placeholder="Partner's Income" onChange={(e) => setPartnerIncome(e.target.value)} />
                <input type="number" placeholder='Joint Expense' onChange={(e) => setJointBalance(e.target.value)} />
            </>
        )}

        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Signup</button>
    </div>
);
        }


export default Signup;
