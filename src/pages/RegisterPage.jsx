import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import styles from '../components/AuthForm.module.css';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await fetch('https://api.powersurge.dk/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        setMessage('✅ User registered successfully! Redirecting...');
        setEmail('');
        setPassword('');
        setConfirm('');
        setTimeout(() => navigate('/login'), 1500); // ✅ Redirect to login after 1.5s
      } else {
        let errorMsg = 'Unknown error';
        try {
          const contentType = res.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const json = await res.json();
            errorMsg = json.message || JSON.stringify(json);
          } else {
            errorMsg = await res.text();
          }
        } catch (_) {}
        setMessage(`Registration failed: ${errorMsg}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className={styles.authContainer}>
      <form onSubmit={handleRegister} className={styles.formBox}>
        <h2>Register</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </div>
  );
}