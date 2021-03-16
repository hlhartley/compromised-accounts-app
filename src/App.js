import React, { useState, useEffect } from 'react';
import mockUsers from './users/Users';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const mockBreachedAccount = {
    Name: "BattlefieldHeroes",
    Title: "Battlefield Heroes",
    Domain: "battlefieldheroes.com",
    BreachDate: "2011-06-26",
    AddedDate: "2014-01-23T13:10Z",
    ModifiedDate: "2014-01-23T13:10Z",
    Description: "In June 2011 as part of a final breached data dump, the hacker collective obtained and usernames and ...",
    DataClasses: ["Passwords","Usernames"],
    IsVerified: true,
    IsSensitive: false
  }
  const [breachedAccounts, setBreachedAccounts] = useState([mockBreachedAccount]);

  useEffect(() => {
    if(mockUsers) {
      setUsers(mockUsers)
    }
  }, [mockUsers]);

  const loginUser = (account) => {
    users.map((user) => {
      if (user.email === account.email && user.password === account.password) {
        setLoggedIn(true);
      } else {
        console.log('FAIL')
      }
    })
  }

  return(
    <div className="App">
      {!loggedIn &&
        <Login
          loginUser={loginUser}
          setBreachedAccounts={setBreachedAccounts}
          breachedAccounts={breachedAccounts}
        />
      }
      {
        loggedIn &&
        <Dashboard
          breachedAccounts={breachedAccounts}
          users={users}
        />
      }
    </div>
  )
}

export default App;