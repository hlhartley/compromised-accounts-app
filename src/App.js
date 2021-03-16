import React, { useState, useEffect } from 'react';
import mockUsers from './users/Users';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [account, setAccount] = useState({
    name: '',
    password: ''
  });
  const [breachedAccounts, setBreachedAccounts] = useState([]);

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
          account={account}
          setAccount={setAccount}
        />
      }
      {
        loggedIn &&
        <Dashboard
          breachedAccounts={breachedAccounts}
          account={account}
        />
      }
    </div>
  )
}

export default App;