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
      <h1>Welcome, {account.name}!</h1>
      {
        breachedAccounts.length > 0 ? <Alert breachedAccounts={breachedAccounts}/> : 'You have 0 breached accounts'
      }
    </div>
  )
}

export default Dashboard;