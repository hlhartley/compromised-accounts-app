import React, { useState, useEffect } from 'react';
import Alert from '../alert/Alert';

const Dashboard = (props) => {
  return(
    <div className="Dashboard">
      {
        props.breachedAccounts.length > 0 ? <Alert breachedAccounts={props.breachedAccounts}/> : 'Welcome to your dashboard'
      }
    </div>
  )
}

export default Dashboard;