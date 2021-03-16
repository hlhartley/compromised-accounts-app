import React, { useState, useEffect } from 'react';
import Alert from '../alert/Alert';

const Dashboard = (props) => {
  const {
    account,
    breachedAccounts
  } = props;

  return(
    <div className="Dashboard">
      <div>Welcome, {account.name}!</div>
      {
        breachedAccounts.length > 0 ? <Alert breachedAccounts={breachedAccounts}/> : 'You have 0 breached accounts'
      }
    </div>
  )
}

export default Dashboard;