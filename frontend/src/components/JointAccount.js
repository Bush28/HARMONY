import React from 'react';
import './JointAccount.css';

const JointAccount = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const calculateJointContribution = () => {
    const userIncome = currentUser.income;
    const partnerIncome = currentUser.partner_income; // Retrieve partner's income from currentUser
    const jointContribution = (userIncome / (userIncome + partnerIncome)) * 100;
    return jointContribution.toFixed(2);
  };

  return (
    <div className="joint-account">
      <h2>Joint Account Contribution</h2>
      <div className="joint-contribution-display">
        <p>Your Income: ${currentUser.income}</p>
        <p>Partner's Income: ${currentUser.partner_income}</p>
        <p>
          According to your incomes, you should put {calculateJointContribution()}%.
        </p>
        <p>And your partner should put {(100 - calculateJointContribution()).toFixed(2)}%.</p>
      </div>
    </div>
  );
};

export default JointAccount;
