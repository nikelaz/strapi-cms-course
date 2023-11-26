'use client';
import { useState } from 'react';

export default function Registration() {
  const [message, setMessage] = useState(null);

  const register = async (event) => {
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

    const req = await fetch('http://127.0.0.1:1337/api/auth/local/register', reqOptions);
    const res = await req.json();

    if (res.error) {
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      setMessage('Successfull registration.');
    }
  };

  return (
    <form onSubmit={register}>
      <label htmlFor="username" className="block">Username</label>
      <input type="text" id="username" name="username" className="block" />

      <label htmlFor="email" className="block">Email</label>
      <input type="email" id="email" name="email" className="block mb-2" />

      <label htmlFor="password" className="block">Password</label>
      <input type="password" id="password" name="password" className="block" />

      <button type="submit">Submit</button>

      <div>{ message }</div>
    </form>
  );
}
