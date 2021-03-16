import React, { useState, useEffect } from 'react';
import mockUsers from './users/Users';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [breachedAccounts, setBreachedAccounts] = useState([]);
  // const mockBreachedAccount = {
  //   Name: "BattlefieldHeroes",
  //   Title: "Battlefield Heroes",
  //   Domain: "battlefieldheroes.com",
  //   BreachDate: "2011-06-26",
  //   AddedDate: "2014-01-23T13:10Z",
  //   ModifiedDate: "2014-01-23T13:10Z",
  //   Description: "In June 2011 as part of a final breached data dump, the hacker collective obtained and usernames and ...",
  //   DataClasses: ["Passwords","Usernames"],
  //   IsVerified: true,
  //   IsSensitive: false
  // }

  useEffect(() => {
    if(mockUsers) {
      setUsers(mockUsers)
    }
  }, [mockUsers]);

  return(
    <div className="App">
      {!loggedIn &&
        <Login
          setLoggedIn={setLoggedIn}
          setBreachedAccounts={setBreachedAccounts}
          breachedAccounts={breachedAccounts}
          users={users}
          loggedIn={loggedIn}
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