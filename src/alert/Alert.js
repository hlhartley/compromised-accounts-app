import React, { useState, useEffect } from 'react';

const Alert = (props) => {
  return(
    <div className="Alert">
      <div>The following accounts have been breached:</div>
      {
        props.breachedAccounts.map((breachedAccount) => {
          return(
            <div>
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