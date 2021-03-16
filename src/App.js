import React, { useState, useEffect } from 'react';
import Login from './login/Login';
import mockUsers from './users/Users';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [breachedAccounts, setBreachedAccounts] = useState([]);

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
      {loggedIn && <div>Welcome!</div>}
    </div>
  )
}

export default App;