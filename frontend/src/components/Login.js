import React, { useState } from 'react';

export default function Login({ onLogin, errorMessage }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={onLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
