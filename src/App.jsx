import { useState } from 'react';
import './App.css';
import Login from './authentication/login';
import Navbar from './layouts/navbar';
import Sidebar from './layouts/sidebar';
import Body from './layouts/body';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  // Función para manejar el inicio de sesión exitoso
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App container-fluid">
      {loggedIn ? (
        <>
          <Navbar onSearch={handleSearch} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <Sidebar />
              </div>
              <div className="col-md-10">
                <Body searchTerm={searchTerm} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>

  );
}

export default App;