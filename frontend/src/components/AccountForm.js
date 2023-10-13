import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountForm.css';

export default function AccountForm({ setUsers }) {
    const [username, setUserName] = useState('')
    const [income, setIncome] = useState('');
    const [partner, setPartner] = useState('');
    const [partner_income, setPartner_Income] = useState('');
    const [jointbalance, setJointBalance] = useState('')
    const navigate = useNavigate();

    function post(event) {
        event.preventDefault();

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
            .then(data => {
                setUsers([data]);
                localStorage.setItem('currentUser', JSON.stringify(data));//Save current user to localStorage
                navigate('/dashboard');//Redirect to Dashboard
            })
            .catch(error => console.error('Error:', error));

        event.target.reset();
    }

    return (
        <form className="" onSubmit={post}>
            <input placeholder="username" onChange={event => setUserName(event.target.value)} />
            <input placeholder="income" onChange={event => setIncome(event.target.value)} />
            <input placeholder="partner" onChange={event => setPartner(event.target.value)} />
            <input placeholder="partner_income" onChange={event => setPartner_Income(event.target.value)} />
            <input placeholder="jointBalance" onChange={event => setJointBalance(event.target.value)} />

            <input type="submit" value="ADD ACCOUNT" />
        </form>
    );
}
