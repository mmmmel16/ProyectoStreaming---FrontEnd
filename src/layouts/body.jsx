import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';

const Body = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        // Realiza una solicitud a la API para obtener los datos de eventos
        fetch('http://localhost/Backend_web_/evento.php')
            .then((response) => response.json())
            .then((data) => {
                // Actualiza el estado con los datos obtenidos de la API
                setEventos(data);
            })
            .catch((error) => {
                console.error('Error al obtener datos de eventos:', error);
            });
    }, []);

    return (
        <div className="row">
            <div className="proximos">
                <h1>Próximos Eventos</h1>
            </div>
            <div className="col-sm-8 text-white">
                {eventos.map((evento) => (
                    <div key={evento.id_evento}>
                        <h2>{evento.nombre_evento}</h2>
                        <p>Tipo de Deporte: {evento.tipo_deporte}</p>
                        <p>Fecha del Evento: {evento.fecha_evento}</p>
                        <p>Lugar del Evento: {evento.lugar_evento}</p>
                        <img src={evento.img_evento} alt={evento.nombre_evento} />
                        <p>Patrocinador Principal: {evento.patrocinador_principal}</p>
                        <p>Horario del Evento: {evento.horario_evento}</p>
                        <a href={`/detalle_evento/${evento.id_evento}`}>Ver detalles</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;    
