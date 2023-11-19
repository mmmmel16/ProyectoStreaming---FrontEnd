import React from 'react';
import { Link } from 'react-router-dom';

const Studio = () => {
    return (
        <div className='text-white'>
            <Link to={'/'}>Volver atrás</Link>
            <h1>Studio</h1>
            <p>Hola desde el Studio</p>
        </div>
    );
};

export default Studio;