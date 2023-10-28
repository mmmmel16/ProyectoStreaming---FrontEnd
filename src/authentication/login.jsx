import React, { useState } from 'react';
import '../styles/sign_in.css';

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Usuario:', usuario);
    console.log('Password:', password);
    try {
      const response = await fetch('http://localhost/Backend_web_/procesarLogin.php', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          "usuario": usuario,
          "password": password,
        }),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta de la API:', data);
        if (data.message === 'Inicio de sesión exitoso') {
          onLogin();
          console.log('Inicio de sesión exitoso');
        } else {
          setErrorMessage('Credenciales incorrectas. Vuelve a intentar.');
        }
      } else {
        setErrorMessage('Error de conexión. Inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error de conexion. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleLogin} className="p-4 border rounded shadow">
        <img className="mb-4" alt="Logo" src="URL_DE_TU_LOGO" />
        <h1 className="h3 mb-3 fw-normal custom-bg-color text-white text-center">Iniciar Sesión</h1>

        <div className="mb-3">
          <label className="form-label text-white">Nombre de usuario</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 mt-3" type="submit">
          Iniciar Sesión
        </button>
        {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
      </form>
    </main>
  );
};

export default Login;
