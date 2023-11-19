// NavbarExample.js
import React, { useState } from 'react';
import '../styles/navbar.css';
import { BiSearch, BiChevronDown, BiBell } from 'react-icons/bi'; // Importa los íconos de React Icons
import imgAvatar from '../img/avatar1.jpg';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../img/pico-deportes-1.png';

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
            <nav className="navbar contenedorNav">
                {/* BOTON CON LOGO Y NOMBRE*/}
                <Button variant="link" href="/home" className="d-flex align-items-center botonHome">
                    <img src={logo} alt="Mi Ícono" className="logo" />
                    <h1 className='tituloPagina'>Pico Deportes</h1>
                </Button>
                {/* BUSCADOR */}
                <form className="mx-auto d-flex buscador" role="buscar" onSubmit={handleSubmit}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button className="btn btn-secondary" type="submit">
                        Search
                    </button>
                </form>
                <div className="profile">
                    <div className="avatar-container">
                        <img src={imgAvatar} alt="Profile Avatar" className="avatar" />
                    </div>
                </div>
                <span className="user-name">Javier</span>
                <Dropdown>
                    <Dropdown.Toggle id="profileButton" as="button" className="btn btn-transparent">
                        <BiChevronDown className="dropdown-icon" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="text-white" href="#/action-1">
                            Action 1
                        </Dropdown.Item>
                        <Dropdown.Item className="text-white" href="/studio">
                            Mi Studio
                        </Dropdown.Item>
                        <Dropdown.Item className="text-white" href="#/action-3">
                            Action 3
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <button className="btn">
                    <BiBell className="bibell" />
                </button>
            </nav>
        </>
    );
};

export default NavbarExample;
