import { useState } from 'react';
import './App.css';
import Login from './authentication/login';
import Navbar from './layouts/navbar';
import Sidebar from './layouts/sidebar';
import Body from './layouts/body';
import Footer from './layouts/footer';

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
    <div className="container-fluid">
      {loggedIn ? (
        <>
          <div className="container-fluid">
            <div className='row'>
              <Navbar onSearch={handleSearch} />
            </div>
            <div className="row">
              <div className="col-md-3">
                <Sidebar />
              </div>
              <div className="col-md-9">
                <Body searchTerm={searchTerm} />
              </div>
            </div>
          </div>
          <div className='row'>
            <Footer/>
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>

  );
}

export default App;