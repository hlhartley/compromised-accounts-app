import React, { useState, useEffect } from 'react';
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input name="email" value={account.email} onChange={handleChange}></input>
        {account.email}
        <label>Password:</label>
        <input name="password" value={account.password} onChange={handleChange}></input>
        {account.password}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;