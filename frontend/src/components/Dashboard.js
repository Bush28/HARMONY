import React from 'react';
import './Dashboard.css';

export default function Dashboard({users}){
    return (
        <div className="dashboard">
            <h1>Account Dashboard</h1>
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

