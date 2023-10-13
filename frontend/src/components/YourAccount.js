import React from 'react';
import './YourAccount.css';

export default function YourAccount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser)

    return (
        <div className="youraccount">
            <h1>Your Account</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Income</th>
                        <th>Partner</th>
                        <th>Partner Income</th>
                        <th>Joint Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{currentUser.username}</td>
                        <td>{currentUser.income}</td>
                        <td>{currentUser.partner}</td>
                        <td>{currentUser.partner_income}</td>
                        <td>{currentUser.jointbalance}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
