import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://api.powersurge.dk/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const { token } = await res.json();
      onLogin(token);
      setRedirect(true); // ✅ trigger navigation AFTER token is set
    } else {
      alert('Login failed');
    }
  };

  if (redirect) {
    return <Navigate to="/upload" replace />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
