import React, { useState, useEffect } from 'react';
import '../login/Login.css';

const Login = (props) => {
  const [account, setAccount] = useState({
    name: '',
    password: ''
  });
  const [loginErrors, setLoginErrors] = useState({
    name: '',
    password: '',
    error: '',
  });

  const loginUser = (account) => {
    let canLoginUser = false;
    props.users.forEach((user) => {
      if (user.name === account.name && user.password === account.password) {
        canLoginUser = true;
      }
    })
    return canLoginUser;
  }

  const verifyBreachedAccount = async (account) => {
    try {
      const url = `https://haveibeenpwned.com/api/v3/breach/${account.name}`;
      const response = await fetch(url);
      if (response.status === 200) {
        return response.json();;
      } else if (response.status === 404) {
        console.log('no breached accounts')
        return false;
      } else {
        console.log(`${response.status} error with verify user request`, response.statusText);
        return false;
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
    e.preventDefault();
    if (account.name && account.password) {
      const canLoginUser = loginUser(account);
      if(canLoginUser) {
        const breachedAccount = await verifyBreachedAccount(account);
        if(breachedAccount) {
          props.setBreachedAccounts([...props.breachedAccounts, breachedAccount]);
        }
        props.setLoggedIn(true);
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
        <div>{loginErrors.error}</div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;