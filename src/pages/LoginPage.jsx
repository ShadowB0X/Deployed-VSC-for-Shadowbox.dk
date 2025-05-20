import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styles from '../components/AuthForm.module.css';

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
      setRedirect(true);
    } else {
      alert('Login failed');
    }
  };

  if (redirect) {
    return <Navigate to="/upload" replace />;
  }

  return (
    <div className={styles.authContainer}>
      <form onSubmit={handleSubmit} className={styles.formBox}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}