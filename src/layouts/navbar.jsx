// NavbarExample.js
import React, { useState } from 'react';
import '../styles/navbar.css';
import imgAvatar from '../img/avatar1.jpg';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../img/pico-deportes-1.png';
import {FaSignOutAlt, FaCog, FaEdit, FaChartBar } from 'react-icons/fa';

const NavbarExample = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        // Espera 300 milisegundos antes de realizar la búsqueda
        setTimeout(() => {
            onSearch(term);
        }, 300);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita la recarga de la página al presionar Enter
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark contenedorNav">

                <div className='container-fluid d-flex align-items-center justify-content-between'>
                    {/* BOTON CON LOGO Y NOMBRE*/}
                    <Button variant="link" href="/home" className="d-flex align-items-center botonHome">
                        <img src={logo} alt="Mi Ícono" className="logo" />
                        <h1 className='tituloPagina'>Pico Deportes</h1>
                    </Button>
    
                    {/* HAMBURGUESA */}
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* BUSCADOR */}
                        <form className="d-flex mx-auto my-2 my-lg-0" onSubmit={handleSubmit}>
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                          />
                          <button className="btn btn-secondary" type="submit">
                            Buscar
                          </button>
                        </form>
    
                        {/* PERFIL */}
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                          <li className="nav-item">
                            <div className="profile">
                              <div className="avatar-container">
                                <img src={imgAvatar} alt="Profile Avatar" className="avatar" />
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">
                            <span className="nav-link user-name">Javier</span>
                          </li>
                          <li className="nav-item">
                            <Dropdown>
                              <Dropdown.Toggle id="profileButton" as="button" className="btn btn-transparent text-white"></Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item className="text-white" href="#/action-1"><FaEdit /> Editar perfil</Dropdown.Item>
                                <Dropdown.Item className="text-white" href="/studio"><FaChartBar /> Mi estudio</Dropdown.Item>
                                <Dropdown.Item className="text-white" href="#/action-3"><FaCog /> Configuración</Dropdown.Item>
                                <Dropdown.Item className="text-white" href="/"><FaSignOutAlt /> Cerrar sesión</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarExample;
