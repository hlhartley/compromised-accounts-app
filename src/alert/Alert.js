import React from 'react';

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
            <div key={index}>
              <div>{breachedAccount.Name} - {breachedAccount.BreachDate}</div>
            </div>
          )
        })
      }
      <div>Please update your username and password for these accounts</div>
    </div>
  )
}

export default Alert;