import React from 'react';
import './Alert.css';

const Alert = (props) => {
  const {
    breachedAccounts
  } = props;

  return(
    <div className="Alert">
      <div>The following accounts have been breached:</div>
      {
        breachedAccounts.length > 0 && breachedAccounts.map((breachedAccount, index) => {
          return(
            <ul key={index}>
              <li>{breachedAccount.Name} - {breachedAccount.BreachDate}</li>
            </ul>
          )
        })
      }
      <div>Please update your username and password for these accounts</div>
    </div>
  )
}

export default Alert;