import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div id="sidebar" className="custom-bg-color">
        <div className="logo-container">
            <button className='btn'><div className="logo">Pico Deportes</div></button>
        </div>
        <div className="position-sticky" style={{ paddingTop: '100px' }}>
            <ul className="nav flex-column  align-items-center">
                <h4 className='text-white'>Menu</h4>
                <li className="nav-item">
                    <a className="nav-link active text-white" href="#">
                        Proximos
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        En vivo
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        Pasados
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        Guardados
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        Resultados
                    </a>
                </li>
            </ul>
        </div>
        <div><hr className='text-white'/></div>
        <div className="position-sticky">
            <ul className="nav flex-column  align-items-center">
                <h4 className='text-white'>Categoria</h4>
                <li className="nav-item">
                    <a className="nav-link active text-white" href="#">
                        Proximos
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        En vivo
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        Pasados
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        Guardados
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        Resultados
                    </a>
                </li>
            </ul>
        </div>
        
    </div>

  );
};

export default Sidebar;
