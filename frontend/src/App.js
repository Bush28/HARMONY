// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import IncomeTracker from './components/IncomeTracker';
// // import JointAccount from './components/JointAccount';
// import YourAccount from './components/YourAccount';
// import FinancialAdvisor from './components/FinancialAdvisor';
// import './App.css';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/get_accounts/')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => setUsers(data.accounts))
//       .catch((error) => {
//         setError(error);
//       });
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <Routes>
//             <Route path="/incometracker" element={<IncomeTracker users={users} />} />
//             {/* <Route path="/jointaccount" element={<JointAccount users={users} />} /> */}
//             <Route path="/youraccount" element={<YourAccount users={users} />} />
//             <Route path="/ask" element={<FinancialAdvisor users={users} />} />
//             <Route path="/" element={<Dashboard users={users} />} />
//           </Routes>
//         </header>
//       </div>
//     </Router>
//   );
// }

// export default App;
// // import React, { useEffect, useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import Dashboard from './components/Dashboard';
// // import IncomeTracker from './components/IncomeTracker';
// // import YourAccount from './components/YourAccount';
// // import FinancialAdvisor from './components/FinancialAdvisor';
// // import Signup from './components/Signup';
// // import Login from './components/Login';

// // import './App.css';

// // function App() {
// //   const [currentUser, setCurrentUser] = useState(null);
// //   const [error, setError] = useState(null);

// //   const attemptLogin = async (credentials) => {
// //     const response = await fetch('http://127.0.0.1:8000/login/', {
// //       method: 'POST',
// //       body: JSON.stringify(credentials),
// //     });
// //     const data = await response.json();
// //     if (data.success) {
// //       setCurrentUser(data.user);
// //     } else {
// //       setError(data.message);
// //     }
// //   };

// //   const attemptSignup = async (credentials) => {
// //     const response = await fetch('http://127.0.0.1:8000/signup/', {
// //       method: 'POST',
// //       body: JSON.stringify(credentials),
// //     });
// //     const data = await response.json();
// //     if (data.success) {
// //       setCurrentUser(data.user);
// //     } else {
// //       setError(data.message);
// //     }
// //   };

// //   const logout = () => {
// //     setCurrentUser(null);
// //   };

// //   useEffect(() => {
// //     fetch('http://127.0.0.1:8000/get_accounts/')
// //       .then((response) => response.json())
// //       .then((data) => setCurrentUser(data))
// //       .catch((error) => setError(error.message));
// //   }, []);

// //   return (
// //     <Router>
// //       <div className="App">
// //         <header className="App-header">
// //           <Link to="/">Dashboard</Link>
// //           {currentUser ? (
// //             <div>
// //               <p>Welcome, {currentUser.username}!</p>
// //               <button onClick={logout}>Logout</button>
// //             </div>
// //           ) : (
// //             <>
// //               <Signup attemptSignup={attemptSignup} />
// //               <Login attemptLogin={attemptLogin} />
// //             </>
// //           )}
// //         </header>
// //         <main>
// //           <Routes>
// //             <Route path="/incometracker" element={<IncomeTracker />} />
// //             <Route path="/youraccount" element={<YourAccount user={currentUser} />} />
// //             <Route path="/ask" element={<FinancialAdvisor />} />
// //             <Route path="/" element={<Dashboard />} />
// //           </Routes>
// //         </main>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import FinancialAdvisor from './components/FinancialAdvisor'
import YourAccount from './components/YourAccount'
import AccountForm from './components/AccountForm';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'; // Import Router components


function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to track whether to show login or signup

  const handleLogin = (username, password) => {
    // Fetch the users array from the server (replace with your API endpoint)
    fetch('http://127.0.0.1:8000/get_accounts/')
      .then((response) => response.json())
      .then((data) => {
        // Check if there is a user with the provided username and password
        const user = data.accounts.find(
          (u) => u.username === username && u.password === password
        );
        console.log(user)

        if (user) {
          // If user is found, set it as currentUser and store in localStorage
          setCurrentUser(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(currentUser)
          // Redirect to the dashboard
          navigate('/dashboard');
        } else {
          // If user is not found, show an error message
          setErrorMessage('Invalid username or password');
        }
      })
      .catch((error) => {
        // Handle fetch error
        console.error('Fetch error:', error);
      });
  };

  // const handleSignup = (userData) => {


  // };

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
    setErrorMessage(''); // Clear any error message when toggling
  };

  const handleLogout = () => {
    // Remove currentUser from state and localStorage
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    // Redirect to the homepage
    navigate('/');
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} errorMessage={errorMessage} />} />
            <Route path="/signup" element={<AccountForm currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
            <Route path="/dashboard" element={<Dashboard currentUser={currentUser} onLogout={handleLogout} />} />
            <Route path="/youraccount" element={<YourAccount currentUser={currentUser} />} />
            <Route path="/ask" element={<FinancialAdvisor users={currentUser} />} />
            <Route
              path="/"
              element={!currentUser ? (
                <div>
                  {isLogin ? (
                    <Login onLogin={handleLogin} errorMessage={errorMessage} />
                  ) : (
                    <AccountForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
                  )}
                  <button onClick={handleToggle}>
                    {isLogin ? 'Sign Up' : 'Log In'}
                  </button>
                </div>
              ) : (
                <Navigate to="/dashboard" />
              )}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
