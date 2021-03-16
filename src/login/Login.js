import React, { useState, useEffect } from 'react';

const verification = (account) => {
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

  users.forEach((user) => {
    if (user.email === account.email && user.password === account.password) {
      return 'SUCCESS'
    } else {
      return 'FAIL'
    }
  })
}

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccount({ email, password});
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input name="email" value={email} onChange={handleChange}></input>
        {email}
        <label>Password:</label>
        <input name="password" value={password} onChange={handleChange}></input>
        {password}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;