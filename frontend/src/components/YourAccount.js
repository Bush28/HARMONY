import React from 'react';
import './YourAccount.css';

export default function YourAccount({users}){
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