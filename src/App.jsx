import { useState } from 'react';
import './App.css';
import Login from './authentication/login';
import Navbar from './layouts/navbar';
import Sidebar from './layouts/sidebar';
import Body from './layouts/body';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Función para manejar el inicio de sesión exitoso
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <Navbar />
          <Sidebar />
          <Body />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>

  );
}

export default App;
