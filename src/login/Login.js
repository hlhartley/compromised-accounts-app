import React, { useState, useEffect } from 'react';
import '../login/Login.css';

const Login = (props) => {
  const [account, setAccount] = useState({
    name: '',
    password: ''
  });
  const [loginErrors, setLoginErrors] = useState({
    name: '',
    password: ''
  });

  const verifyBreachedAccounts = async (account) => {
    try {
      const url = `https://haveibeenpwned.com/api/v3/breach/${account.name}`;
      const response = await fetch(url);
      const breachedAccount = await response.json();
      if (response.status === 200) {
        return breachedAccount;
      } else if (response.status === 404) {
        console.log('no breached accounts')
        return false;
      } else {
        console.log(`${response.status} error with verify user request`, response.statusText);
      }
    } catch (error) {
      console.log('error with verify user request', error);
    }
  }

  const handleChange = (e) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value
    setAccount((values) => ({
      ...values,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    const {
      name,
      password
    } = account;
    e.preventDefault();
    if (name && password) {
      props.loginUser(account);
      const breachedAccount = await verifyBreachedAccounts(account);
      props.setBreachedAccounts([...props.breachedAccounts, breachedAccount]);
    } else {
      setLoginErrors((values) => ({
        ...values,
        name: name ? '' : 'Please enter a valid name',
        password: password ? '' : 'Please enter a valid password'
      }));
    }
  }

  return(
    <div className="Login">
      <form
        onSubmit={handleSubmit}
        className="Login-form"
      >
        <div className="Login-input">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={account.name}
            onChange={handleChange}>
          </input>
          <div>{loginErrors.name}</div>
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