import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Sign up successful. You can now log in.');
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Sign Up</button>
    </form>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      const jwtToken = `${email}-${password}`;
      localStorage.setItem('token', jwtToken);
      alert('Login successful.');
    } else {
      alert('Email or password is incorrect.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Login</button>
    </form>
  );
};

const Logic = () => {
  return (
    <div>
      <SignUp />
      <Login />
    </div>
  );
};

export default Logic;
