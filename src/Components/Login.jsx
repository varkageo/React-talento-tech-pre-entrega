import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
const [user, setUser] = useState('');
const [pass, setPass] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (user === 'juan1996' && pass === '1234') {
        onLogin();
    } else {
        setError('Usuario o contraseña incorrectos');
    }
};

return (
    <div className="login-overlay">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Inicia Sesión</h2>
        <input
            type="text"
            placeholder="Usuario (juan1996)"
            value={user}
            onChange={(e) => setUser(e.target.value)}
        />
        <input
            type="password"
            placeholder="Contraseña (1234)"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
);
};

export default Login;
