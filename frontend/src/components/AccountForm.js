import React, { useState } from 'react';
import './AccountForm.css';

export default function AccountForm({ users, setUsers }) {



    const [username, setUserName] = useState('')
    const [income, setIncome] = useState('');
    const [partner, setPartner] = useState('');
    const [partner_income, setPartner_Income] = useState('');
    const [jointbalance, setJointBalance] = useState('')


    function post(event) {
        event.preventDefault();
        console.log("hi bush")

        fetch('http://127.0.0.1:8000/create_individual_account/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "income": income,
                "partner": partner,
                "partner_income": partner_income,
                "jointbalance": jointbalance,
            })
        })
            .then(response => response.json())
            .then(data => setUsers([...users, data]))
        event.target.reset();
    }



    return (
        <form className="" onSubmit={event => post(event)} >
            <input placeholder="username" onChange={event => setUserName(event.target.value)} />
            <input placeholder="income" onChange={event => setIncome(event.target.value)} />
            <input placeholder="partner" onChange={event => setPartner(event.target.value)} />
            <input placeholder="partner_income" onChange={event => setPartner_Income(event.target.value)} />
            <input placeholder="jointBalance" onChange={event => setJointBalance(event.target.value)} />

            <input type="submit" value="ADD ACCOUNT" />
        </form>
    );

}







// const AccountForm = () => {
//     const [user1, setUser1] = useState('');
//     const [balance1, setBalance1] = useState(0);
//     const [user2, setUser2] = useState('');
//     const [balance2, setBalance2] = useState(0);
//     const [jointBalance, setJointBalance] = useState(0);

//     const handleSubmit = () => {
//         const data = {
//             user1,
//             balance1,
//             user2,
//             balance2,
//             jointBalance,
//         };

//         fetch('http://127.0.0.1:8000/create_individual_account/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Success:', data);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     return (
//         <div>
//             <label>User 1:</label>
//             <input type="text" value={user1} onChange={(e) => setUser1(e.target.value)} />

//             <label>User 1 Balance:</label>
//             <input type="number" value={balance1} onChange={(e) => setBalance1(e.target.value)} />

//             <label>User 2:</label>
//             <input type="text" value={user2} onChange={(e) => setUser2(e.target.value)} />

//             <label>User 2 Balance:</label>
//             <input type="number" value={balance2} onChange={(e) => setBalance2(e.target.value)} />

//             <label>Joint Balance:</label>
//             <input type="number" value={jointBalance} onChange={(e) => setJointBalance(e.target.value)} />

//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     );
// };

// export default AccountForm;
