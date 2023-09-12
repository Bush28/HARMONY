import React from "react"
import './App.css';
import AccountForm from './components/AccountForm.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Account Form</h1>
        <AccountForm />
      </header>
    </div>
  );
}

export default App;