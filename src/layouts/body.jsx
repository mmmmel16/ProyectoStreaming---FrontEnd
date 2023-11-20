import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import img from '../img/img2.jpg';
import '../styles/body.css';
import '../styles/card.css';
import YouTube from 'react-youtube';
import imgPerfil from '../img/avatar1.png';

const Body = ({ searchTerm }) => {
    const [eventos, setEventos] = useState([]);
    const [selectedEvento, setSelectedEvento] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                // La URL ahora incluirá el término de búsqueda si está presente
                const url = searchTerm ? `http://localhost/Backend_web_/buscarEvento.php?search=${searchTerm}` : `http://localhost/Backend_web_/evento.php`;
                const response = await fetch(url);
                const data = await response.json();
                setEventos(data);
            } catch (error) {
                console.error('Error al obtener datos de eventos:', error);
            }
        };

        // Llama a la función para cargar eventos cada vez que cambia el término de búsqueda
        fetchEventos();
    }, [searchTerm]); // El segundo parámetro es un arreglo vacío, lo que significa que se ejecutará solo una vez al montar el componente

    const handleCardHover = (index) => {
        setHoveredIndex(index);
    };
    const handleCardLeave = () => {
        setHoveredIndex(null);
    };

    const handleCardClick = (evento) => {
        if (showModal) {
            setShowModal(false);
        } else {
            setSelectedEvento(evento);
            setShowModal(true);
        }
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className="container-fluid fondo">
            {/*PARTE PRINCIPAL*/}
            <div className="row">
                <h1 className='subtitulo'>Próximos</h1>
                <div className="col-sm-6">
                    <div className="position-relative">
                        <img src={img} alt="" className='imagenPrincipal' />
                        <div className='degradado'></div>
                        <div className='degradado'></div>
                        <h3 className='textoOverlay1'>Pre-Federal: </h3>
                        <h4 className='textoOverlay2'>Independiente junior</h4>
                        <h4 className='textoOverlay3'> vs </h4>
                        <h4 className='textoOverlay4'>Cultural Argentino</h4>

                        <div className='perfil-container'>
                            <img src={imgPerfil} alt="Profile Avatar" className='perfil' />
                        </div>
                        <span className="partido-name"> Hoy 20:00 hs</span>
                        <span className='deporte-name'> Futbol</span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="position-relative">
                        <img src={img} alt="" className='imagenPrincipal' />
                        <div className='degradado'></div>
                        <div className='degradado'></div>
                        <h2 className='textoOverlay1'>Pre-Federal: </h2>
                        <h3 className='textoOverlay2'>Independiente junior</h3>
                        <h3 className='textoOverlay3'> vs </h3>
                        <h3 className='textoOverlay4'>Cultural Argentino</h3>

                        <div className='perfil-container'>
                            <img src={imgPerfil} alt="Profile Avatar" className='perfil' />
                        </div>
                        <span className="partido-name"> Hoy 20:00 hs</span>
                        <span className='deporte-name'> Futbol</span>
                    </div>
                </div>
            </div>

            {/* PARTE CARDS */}
            <div className="row d-flex flex-wrap">
                <h3 className='subtitulo mt-5 mb-1'>Más adelante</h3>

                {/* Mapea sobre los eventos y crea una tarjeta para cada uno */}
                {eventos.map((evento, index) => (
                    <div key={evento.id_evento} className={`col-md-3 ${hoveredIndex === index ? 'hovered' : ''}`} onClick={() => handleCardClick(evento)}
                        onMouseEnter={() => handleCardHover(index)}
                        onMouseLeave={handleCardLeave}>
                        <Card className='styleCard bg-white'>
                            {/* Usa la imagen del evento o una imagen predeterminada */}
                            <Card.Img variant="top" src={evento.img_evento || 'ruta_de_imagen_predeterminada.jpg'} />
                            <Card.Body>
                                <Card.Title>{evento.nombre_evento}</Card.Title>
                                <Card.Text>
                                    Tipo de Deporte: {evento.tipo_deporte}
                                    <br />
                                    Fecha del Evento: {evento.fecha_evento}
                                    <br />
                                    Lugar del Evento: {evento.lugar_evento}
                                </Card.Text>
                                <Button variant="secondary" href={`/detalle_evento/${evento.id_evento}`}>
                                    Ver detalles
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Modal de pantalla completa */}
            <Modal show={showModal} onHide={handleCloseModal} fullscreen className="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title className='text-white'>{selectedEvento && selectedEvento.nombre_evento}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Aquí puedes colocar el contenido de la modal, por ejemplo, detalles adicionales del evento */}
                    {selectedEvento && (
                        <>
                            {selectedEvento.url_transmision && (
                                <>
                                    <YouTube videoId="bHQqvYy5KYo" opts={{ width: '100%', height: 600 }} />
                                </>
                            )}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Body;
