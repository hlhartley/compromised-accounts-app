import React from 'react';
import './Alert.css';

const Alert = (props) => {
  const {
    breachedAccounts
  } = props;

  return(
    <div className="Alert">
      <div className="Alert-message">
        <i class="fas fa-exclamation-triangle"></i>
        <div className="Alert-header">Breached accounts:</div>
      </div>
      {
        breachedAccounts.length > 0 && breachedAccounts.map((breachedAccount, index) => {
          return(
            <ul key={index}>
              <li>
                {breachedAccount.Name} -
                breached: {breachedAccount.BreachDate}
              </li>
            </ul>
          )
        })
      }
      <div>Please update your username and password for these accounts</div>
    </div>
  )
}

export default Alert;