import React, { useState } from 'react';
import'./App.css'
import validator from 'validator';

function App() {

  const[email, setEmail] = useState()
  const[name, setName] = useState()
  const[username, setUsername] = useState()
  const[password, setPassword] = useState()
  const[cnfrmpass, setCnfrmpass] = useState()
  const[website, setWebsite] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    setEmailtext('')
    setPasswordText('')
  }

  return {
    <form onSubmit={handleSubmit} noValidate>
      <div className="a">
        <label htmlFor="name">Name</label> 
        <input id="name" type="text"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="emai l" value={email}/>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"/>
        <label htmlFor="password">Password</label>
        <input id="passwor" type="password"/>
        <label htmlFor="cnfrmpassword">Confirm Password</label>
        <input id="cnfrmpassword" type="password"/>
        <label>Website</label>
        <input/>
      </div>
    </form>
  }
}

export default Form