// import React, { useState } from 'react';
// import './FinancialAdvisor.css';

// export default function FinancialAdvisor() {
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');

//     const askQuestion = () => {
//         const csrftoken = document.getElementsByName('csrfmiddlewaretoken')[0].value;

//         fetch('http://127.0.0.1:8000/ask/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-CSRFToken': csrftoken
//             },
//             body: JSON.stringify({ question }),
//         })

//             .then((response) => response.json())
//             .then((data) => setAnswer(data.answer));

//     };

//     return (
//         <div className='financial-advisor-question'>
//             <input type='text' placeholder='Ask your question here' value={question} onChange={(e) => setQuestion(e.target.value)} />
//             <button onClick={askQuestion}>Ask</button>
//             <div className='answer-box'>
//                 {answer && <p>{answer}</p>}
//             </div>
//         </div>
//     );
// }


import React, { useState } from 'react';
import './FinancialAdvisor.css';

export default function FinancialAdvisor() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
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
        const csrftoken = getCookie('csrftoken');  // Use the function here

        fetch('http://127.0.0.1:8000/ask/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken  // Pass the CSRF token here
            },
            body: JSON.stringify({ question }),
        })
            .then((response) => response.json())
            .then((data) => setAnswer(data.answer));
    };


    return (
        <div className='financial-advisor-question'>
            <input
                type='text'
                placeholder='Ask your question here'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <button onClick={askQuestion}>Ask</button>
            <div className='answer-box'>
                {answer && <p>{answer}</p>}
            </div>
        </div>
    );
}
