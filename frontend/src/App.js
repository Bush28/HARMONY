// import React, { useEffect, useState } from 'react';

// function App() {
//   const [accounts, setAccounts] = useState([]);

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/get_accounts/')
//       .then((response) => response.json())
//       .then((data) => setAccounts(data.accounts));
//   }, []);

//   return (
//     <div>
//       <h1>Account Info</h1>
//       <ul>
//         {accounts.map((account, index) => (
//           <li key={index}>
//             Username: {account.username}, Balance: {account.balance}
//             {account.spouse && `, Spouse: ${account.spouse}, Joint Balance: ${account.joint_balance}`}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import './App.css';
import AccountForm from './components/AccountForm.js';
import Dashboard from './components/Dashboard.js';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_accounts/")
      .then(response => response.json())
      .then(data => setUsers(data.accounts))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Harmony</h1>
        <h2>Account Form</h2>
        <AccountForm users={users} setUsers={setUsers} />
        <h2>Dashboard</h2>
        <Dashboard users={users} />
      </header>
    </div>
  );
}

export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import AccountForm from './components/AccountForm.js';
// import IncomeTracker from './components/IncomeTracker.js';
// import JointAccount from './components/JointAccount.js';
// import FinancialAdvisor from './components/FinancialAdvisor.js';
// import YourAccount from './components/YourAccount.js';


// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/get_accounts/')
//       .then((response) => response.json())
//       .then((data) => setUsers(data.accounts));
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Account Form</h1>
//           <Switch>
//             <Route path="/incometracker">

//             <IncomeTracker users={users} />
//             </Route>
//             <Route path="/jointaccount">
//               <JointAccount users={users} />
//             </Route>
//             <Route path="/youraccount">
//               <YourAccount users={users} />
//             </Route>
//             <Route path="/accountform">
//               <AccountForm users={users} />
//             </Route>
//             <Route path="/financialadvisor">
//               <FinancialAdvisor users={users} />
//             </Route>
//             <Route path="/">
//               <Dashboard users={users}/>
//             </Route>
//           </Switch>
//         </header>
//       </div>
//     </Router>
//   );
// }

// export default App;
