'use client';
import { useState } from 'react';

export default function Login() {
  const [message, setMessage] = useState(null);

  const login = async (event) => {
    event.preventDefault();
    setMessage(null);
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    };

    const req = await fetch('http://127.0.0.1:1337/api/auth/local', reqOptions);
    const res = await req.json();

    if (res.error) {
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      setMessage('Login successfull.');
    }
  };

  return (
    <form onSubmit={login}>
      <label htmlFor="identifier" className="block">Username/Email</label>
      <input type="text" id="identifier" name="identifier" className="block" />

      <label htmlFor="password" className="block">Password</label>
      <input type="password" id="password" name="password" className="block" />

      <button type="submit">Submit</button>

      <div>{ message }</div>
    </form>
  );
}
