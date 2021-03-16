import React, { useState, useEffect } from 'react';
import '../login/Login.css';

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
    props.loginUser(account);
  }

  return(
    <div className="Login">
      <form
        onSubmit={handleSubmit}
        className="Login-form"
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