import '../styles/vivo.css';
import { Card, Modal, Button } from 'react-bootstrap';
import { ImFeed } from "react-icons/im";
import imgPerfil from '../img/avatar1.png';
import Navbar from './navbar';
import { useState, useEffect } from 'react';
import Footer from './footer';
import YouTube from 'react-youtube';

const Vivo = () => {
    const [eventos, setEventos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEvento, setSelectedEvento] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const handleSearch = (term) => {
        setSearchTerm(term);
    };

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
        <>
            <div className="container-fluid">
                <div className='row'>
                    <Navbar onSearch={handleSearch} />
                </div>

                <div className="row fondoVivo">
                    <div>
                        {/* FILA 1 */}
                        <div className='row contenedorPrimeraFila'>
                            <div className='col-md-1'>
                                <div className="contenedorIconVivo"><ImFeed /></div>
                            </div>
                            <div className='col-md-2 d-flex align-items-center px-4'>
                                <h1 className='textoVivo'>En vivo</h1>
                            </div>
                        </div>

                        {/* FILA 2*/}
                        <div className='row'>
                            <hr className='hr' />
                        </div>
                    </div>

                    <div>
                        {/* FILA 3*/}
                        <div className="row d-flex flex-wrap filaCard">
                            {/* Card 1 */}
                            {/* Mapea sobre los eventos y crea una tarjeta para cada uno */}
                            {eventos.map((evento, index) => (
                                <div key={evento.id_evento} className={`col-md-3 position-relative ${hoveredIndex === index ? 'hovered' : ''}`} onClick={() => handleCardClick(evento)}
                                    onMouseEnter={() => handleCardHover(index)}
                                    onMouseLeave={handleCardLeave}>
                                    <Card className='styleCard'>
                                    <Card.Img variant="top" src={evento.img_evento || 'ruta_de_imagen_predeterminada.jpg'} className='imagenVivo' />
                                    <div className='vivoOverlay'> <ImFeed className='iconoVivo' /> EN VIVO</div>
                                    <Card.Body className='bodyCard'>
                                        <div className='perfilCard'>
                                            <img src={imgPerfil} alt="Profile Avatar" className='imagenCard' />
                                        </div>

                                        <div className='descripcionCard'>
                                            <Card.Title className='tituloCard'>{evento.nombre_evento}</Card.Title>
                                            <Card.Text className='nombrePerfil'> {evento.lugar_evento} </Card.Text>
                                            <Card.Text className='perfilesViendo'> {evento.tipo_deporte} </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </div>
                            ))}
                            
                            {/* Modal de pantalla completa */}
                            <Modal show={showModal} onHide={handleCloseModal} fullscreen className="custom-modal">
                                <Modal.Header closeButton>
                                    <Modal.Title className='text-white'>{selectedEvento && selectedEvento.nombre_evento}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {selectedEvento && (
                                        <>
                                            {selectedEvento.url_transmision && (
                                                <>
                                                    <YouTube videoId={selectedEvento.url_transmision} opts={{ width: '100%', height: 600 }} />
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
                    </div>
                </div>
            </div>
            <div className='row'>
                <Footer />
            </div>
        </>
    );
};

export default Vivo;    
