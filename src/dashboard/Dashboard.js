import React, { useState, useEffect } from 'react';
import Alert from '../alert/Alert';

const Dashboard = (props) => {
  return(
    <div className="Dashboard">
      <div>Welcome to your Dashboard</div>
      {
        props.breachedAccounts.length > 0 ? <Alert breachedAccounts={props.breachedAccounts}/> : 'You have 0 breached accounts'
      }
    </div>
  )
}

export default Dashboard;