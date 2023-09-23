import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import IncomeTracker from './components/IncomeTracker';
import JointAccount from './components/JointAccount';
import YourAccount from './components/YourAccount';
import FinancialAdvisor from './components/FinancialAdvisor';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/get_accounts/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setUsers(data.accounts))
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/incometracker" element={<IncomeTracker users={users} />} />
            {/* <Route path="/jointaccount" element={<JointAccount users={users} />} /> */}
            <Route path="/youraccount" element={<YourAccount users={users} />} />
            <Route path="/ask" element={<FinancialAdvisor users={users} />} />
            <Route path="/" element={<Dashboard users={users} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
