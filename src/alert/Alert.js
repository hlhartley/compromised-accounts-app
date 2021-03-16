import React, { useState, useEffect } from 'react';

const Alert = (props) => {
  return(
    <div className="Alert">
      <div>The following accounts have been breached:</div>
      {
        props.breachedAccounts.length > 0 && props.breachedAccounts.map((breachedAccount, index) => {
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