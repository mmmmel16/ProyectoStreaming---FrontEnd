import React, { useState, useEffect } from 'react';
import '../styles/sign_in.css';
import logo from '../img/pico-deportes-1.png';

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

  useEffect(() => {
    let x = 0,
      y = 0,
      dirX = 1,
      dirY = 1;
    const speed = 5;
    let dvd = document.getElementById("dvd");
    const container = document.querySelector('.containerImagen');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const dvdWidth = dvd.clientWidth;
    const dvdHeight = dvd.clientHeight;
  
    function animate() {
      if (y + dvdHeight >= containerHeight || y < 0) {
        dirY *= -1;
      }
      if (x + dvdWidth >= containerWidth || x < 0) {
        if (x < 0) {
          x = 0;
          dirX *= -1;
        }
        if (x + dvdWidth >= containerWidth) {
          x = containerWidth - dvdWidth;
          dirX *= -1;
        }
      }
      x += dirX * speed;
      y += dirY * speed;
      dvd.style.left = x + "px";
      dvd.style.top = y + "px";
      window.requestAnimationFrame(animate);
    }
  
    window.requestAnimationFrame(animate);
  }, []);

  return (
    <div className='row fila'>
        <div className='col-md-6 containerImagen'>
          <div id="dvd"></div>
          <div className='position-relative'>
            <div className='textoPrimero'>Tu comunidad, tus campeones, tu streaming:</div>
            <div className='textoSegundo'>¡Vive el deporte local en cada pantalla!</div>
          </div>
        </div>

        <div className='col-md-6 containerFormulario'>
            <form onSubmit={handleLogin} className="formContainer">
                <div className="d-flex justify-content-center mb-4">
                  <img className="logoLogin" alt="Logo" src={logo} />
                </div>
                <h1 className="mb-3 text-white text-center">Iniciar Sesión</h1>
                <div className="mb-3 linea">
                  <label className="form-label text-white">Nombre de usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre de usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                </div>
                <div className="mb-3 linea">
                  <label className="form-label text-white">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary w-100 mt-3 botonEnviar" type="submit">
                  Iniciar Sesión
                </button>
                {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
            </form>
        </div>
    </div>
  );
};

export default Login;
