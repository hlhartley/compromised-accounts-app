import React, { useState, useEffect } from 'react';
import '../login/Login.css';

const Login = (props) => {
  const [account, setAccount] = useState({
    email: '',
    password: ''
  });
  const [loginErrors, setLoginErrors] = useState({
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
    if (account.email && account.password) {
      props.loginUser(account);
    } else {
      setLoginErrors((values) => ({
        ...values,
        email: account.email ? '' : 'Please enter a valid email',
        password: account.password ? '' : 'Please enter a valid password'
      }))
    }
  }

  return(
    <div className="Login">
      <form
        onSubmit={handleSubmit}
        className="Login-form"
      >
        <div className="Login-input">
          <label>Email:</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={account.email}
            onChange={handleChange}>
          </input>
          <div>{loginErrors.email}</div>
        </div>
        <div className="Login-input">
          <label>Password:</label>
          <input
            name="password"
            type="text"
            placeholder="Password"
            value={account.password}
            onChange={handleChange}>
          </input>
          <div>{loginErrors.password}</div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;