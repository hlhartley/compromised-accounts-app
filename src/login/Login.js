import React, { useState, useEffect } from 'react';
import '../login/Login.css';

const verifyUser = (account) => {
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
      console.log('SUCCESS')
    } else {
      console.log('FAIL')
    }
  })
}

const Login = (props) => {
  const [account, setAccount] = useState({
    email: '',
    password: ''
  });


  const handleChange = (e) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value
    setAccount((values) => ({
      ...values,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyUser(account);
  }

  return(
    <div class="Login">
      <form
        onSubmit={handleSubmit}
        class="Login-form"
      >
        <label>Email:</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={account.email}
          onChange={handleChange}>
        </input>
        <label>Password:</label>
        <input
          name="password"
          type="text"
          placeholder="Password"
          value={account.password}
          onChange={handleChange}>
        </input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;