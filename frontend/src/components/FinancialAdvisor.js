import React, { useState } from 'react';
import './FinancialAdvisor.css';

export default function FinancialAdvisor() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [showDetailsInput, setShowDetailsInput] = useState(false);
    const [details, setDetails] = useState({
        item: '',
        salary: '',
        jointAccountBalance: '',
    });

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie('csrftoken');

    const askQuestion = () => {
        fetch('http://127.0.0.1:8000/ask/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({ question }),
        })
        .then((response) => response.json())
        .then((data) => setAnswer(data.answer));
    };

    const handleCardClick = (item) => {
        setQuestion(`Should I buy a ${item}?`);
        setShowDetailsInput(true);
        setDetails({ ...details, item });
    };

    const handleDetailsSubmit = (e) => {
        e.preventDefault();
        setShowDetailsInput(false);

        const concatenatedQuestion = `I want to buy a ${details.item}. My salary is ${details.salary} and I have to put ${details.jointAccountBalance} in my joint account. Should I buy it?`;

        fetch('http://127.0.0.1:8000/ask/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({ question: concatenatedQuestion }),
        })
        .then((response) => response.json())
        .then((data) => setAnswer(data.answer));
    };

    return (
        <div className='financial-advisor'>
            <div className='financial-advisor-question'>
                <input
                    type='text'
                    placeholder='Ask for a financial advice!'
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button onClick={askQuestion}>Ask</button>
                <div className='answer-box'>
                    {answer && <p>{answer}</p>}
                </div>
            </div>

            <div className='prebuilt-questions'>
                <div className='card car' onClick={() => handleCardClick("car")}>
                    <h3>Should I buy a car?</h3>
                </div>
                <div className='card stocks' onClick={() => handleCardClick("stocks")}>
                    <h3>Should I invest in stocks?</h3>
                </div>
                <div className='card house' onClick={() => handleCardClick("house")}>
                    <h3>Should I buy a house?</h3>
                </div>
            </div>

            {showDetailsInput && (
                <form className='details-form' onSubmit={handleDetailsSubmit}>
                    <h2>Provide Details</h2>
                    <label>
                        Item:
                        <input
                            type='text'
                            value={details.item}
                            onChange={(e) => setDetails({ ...details, item: e.target.value })}
                        />
                    </label>
                    <label>
                        Salary:
                        <input
                            type='text'
                            value={details.salary}
                            onChange={(e) => setDetails({ ...details, salary: e.target.value })}
                        />
                    </label>
                    <label>
                        Joint Account Balance:
                        <input
                            type='text'
                            value={details.jointAccountBalance}
                            onChange={(e) => setDetails({ ...details, jointAccountBalance: e.target.value })}
                        />
                    </label>
                    <button type='submit'>Get Advice</button>
                </form>
            )}
        </div>
    );
}
