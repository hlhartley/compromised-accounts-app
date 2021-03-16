import React, { useState, useEffect } from 'react';
import '../login/Login.css';

const Login = (props) => {
  const {
    users,
    setAccount,
    account,
    breachedAccounts,
    setLoggedIn,
    setBreachedAccounts
  } = props;

  const [loginErrors, setLoginErrors] = useState({
    name: '',
    password: '',
    error: '',
  });

  const loginUser = (account) => {
    let canLoginUser = false;
    users.forEach((user) => {
      if (user.name === account.name && user.password === account.password) {
        canLoginUser = true;
      }
    })
    return canLoginUser;
  }

  const verifyBreachedAccount = async (account) => {
    try {
      const url = `https://haveibeenpwned.com/api/v3/breach/${account.name}`;
      return await fetch(url);
    } catch (error) {
      console.log('error with verify user request', error);
    }
  }

  const handleResponse = async (response) => {
    if (response.status === 200) { // 200 = breached account
      const breachedAccount = await response.json();
      setBreachedAccounts([...breachedAccounts, breachedAccount]);
    } else if (response.status === 404) { // 404 = not a breached account
      console.log('no breached accounts')
    } else {
      console.log(`${response.status} error with verify user request`, response.statusText);
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
    e.preventDefault(); // prevent the page from refreshing
    if (account.name && account.password) {
      const canLoginUser = loginUser(account);
      if(canLoginUser) {
        const response = await verifyBreachedAccount(account);
        await handleResponse(response);
        setLoggedIn(true);
      } else {
        setLoginErrors((values) => ({
          ...values,
          error: 'Your name or password is incorrect'
        }));
      }
    } else {
      setLoginErrors((values) => ({
        ...values,
        name: account.name ? '' : 'Please enter a valid name',
        password: account.password ? '' : 'Please enter a valid password'
      }));
    }
  }

  return(
    <div className="Login">
      <form
        onSubmit={handleSubmit}
        className="Login-form"
      >
        <div className="Login-input-container">
          <label className="Login-label">Name:</label>
          <input
            className="Login-input"
            name="name"
            type="text"
            placeholder="Name"
            value={account.name}
            onChange={handleChange}>
          </input>
          <div className="Login-error">{loginErrors.name}</div>
        </div>
        <div className="Login-input-container">
          <label className="Login-label">Password:</label>
          <input
            className="Login-input"
            name="password"
            type="text"
            placeholder="Password"
            value={account.password}
            onChange={handleChange}>
          </input>
          <div className="Login-error">{loginErrors.password}</div>
        </div>
        <button className="Login-button">Submit</button>
        <div className="Login-error">{loginErrors.error}</div>
      </form>
    </div>
  )
}

export default Login;