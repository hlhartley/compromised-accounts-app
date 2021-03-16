import React, { useState, useEffect } from 'react';
import Login from './login/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = (account) => {
    const users = [
      {
        email: 'user1@email.com',
        password: 'pw1'
      },
      {
        email: 'user2@email.com',
        password: 'pw2'
      }
    ];

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
        />
      }
      {loggedIn && <div>Welcome!</div>}
    </div>
  )
}

export default App;