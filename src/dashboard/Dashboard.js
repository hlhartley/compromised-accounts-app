import React from 'react';
import Alert from '../alert/Alert';
import './Dashboard.css';

const Dashboard = (props) => {
  const {
    account,
    breachedAccounts
  } = props;

  return(
    <div className="Dashboard">
      <div className="Dashboard-header">{account.name}'s Dashboard</div>
      <h2>Welcome, {account.name}!</h2>
      {
        breachedAccounts.length > 0 ? <Alert breachedAccounts={breachedAccounts}/> : ''
      }
    </div>
  )
}

export default Dashboard;