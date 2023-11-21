import { Card, Button, Modal, Form } from 'react-bootstrap';
import imgCard from '../img/pelota.jpeg';
import imgCamara from '../img/camara.png'
import '../styles/studio.css';
import { MdDelete } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { FaChartBar, FaPencilAlt } from 'react-icons/fa';
import Footer from './footer';
import { SlActionRedo } from 'react-icons/sl';
import { ImFeed } from "react-icons/im";
import { BiCaretRightSquare } from "react-icons/bi";
import imgAvatar from '../img/avatar1.jpg';
import { BiBookmark } from "react-icons/bi";
import { BsKanban } from "react-icons/bs";

const Studio = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [eventos, setEventos] = useState([]);
    const [selectedEvento, setSelectedEvento] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);

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
    }, [searchTerm]);


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
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const [showUploadModal, setShowUploadModal] = useState(false);
    const [videoDetails, setVideoDetails] = useState({
        name: '',
        description: '',
        image: '',
        videoFile: null,
    });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedValues, setEditedValues] = useState({
        name: '',
        description: '',
        imageUrl: '',
    });

    const openUploadModal = () => {
        setShowUploadModal(true);
    };

    const closeUploadModal = () => {
        setShowUploadModal(false);
    };

    const openDeleteModal = (evento) => {
        setSelectedEvento(evento);
        setShowDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const openEditModal = () => {
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        // Lógica para guardar los valores editados
        // ...
        closeEditModal(); // Cierra el modal después de guardar los cambios
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedValues({
            ...editedValues,
            [name]: value,
        });
    };

    const handleInputChangeUpload = (event) => {
        const { name, value, files } = event.target;

        if (name === 'image') {
            // Handle image file upload
            if (files && files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setVideoDetails({
                        ...videoDetails,
                        [name]: e.target.result,
                    });
                };
                reader.readAsDataURL(files[0]);
            }
        } else if (name === 'videoFile') {
            // Handle video file upload
            setVideoDetails({
                ...videoDetails,
                [name]: files[0],
            });
        } else {
            // Handle other input changes
            setVideoDetails({
                ...videoDetails,
                [name]: value,
            });
        }
    };

    const handleUploadSubmit = (event) => {
        event.preventDefault();
        // Lógica para subir el video con los detalles ingresados
        // ...
        closeUploadModal(); // Cierra la ventana modal después de subir el video
    };
    const handleDeleteSubmit = async (event) => {
        //event.preventDefault();

        try {
            // Realizar la solicitud DELETE al backend para eliminar el evento
            const response = await fetch(`http://localhost/Backend_web_/borrarEvento.php?id_evento=${selectedEvento.id_evento}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Evento eliminado con éxito.');
                // Actualizar la lista de eventos después de la eliminación
                const updatedEventos = eventos.filter((evento) => evento.id_evento !== selectedEvento.id_evento);
                setEventos(updatedEventos);
            } else {
                console.error('Error al eliminar el evento. Código de estado:', response.status);

            }
        } catch (error) {
            console.error('Error al realizar la solicitud DELETE:', error);
        }
        closeDeleteModal(); // Cierra el modal después de eliminar el evento
    };
    return (
        <>
            <div className="container-fluid">
                <div className='row'>
                    <Navbar onSearch={handleSearch} />
                </div>

                <div className='row fondoEstudio'>
                    <div className='col-md-2 sideBarAdmin'>
                        <div className='contenedorAvatar'>
                            <div className='containerAvatarStudio'>
                                <div>
                                    <img src={imgAvatar} alt="Profile Avatar" className="avatarStudio" />
                                </div>

                            </div>
                            <span className="usuarioStudio">Javier</span>
                        </div>
                        <ul className="navStudio flex-column align-items-start">

                            <li className="nav-item">
                                <a className="nav-link linkStudio text-white" href="#">
                                    <div className="contenedorIconStudio"><SlActionRedo /></div>
                                    <span className="iconStudio">Mis directos</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link linkStudio text-white" href="#">
                                    <div className="contenedorIconStudio"><ImFeed /></div>
                                    <span className="iconStudio">Monetización</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link linkStudio text-white" href="#">
                                    <div className="contenedorIconStudio"><BiCaretRightSquare /></div>
                                    <span className="iconStudio">Panel de análisis</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link linkStudio text-white" href="#">
                                    <div className="contenedorIconStudio"><BiBookmark /></div>
                                    <span className="iconStudio">Suscriptores</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link linkStudio text-white" href="#">
                                    <div className="contenedorIconStudio"><BsKanban /></div>
                                    <span className="iconStudio">Transmitir en vivo</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-md-10'>
                        <h2 className='textoPanel'><FaChartBar /> Panel de administración</h2>
                        <div className="row d-flex flex-wrap">

                            {/* MODAL SUBIR VIDEO */}
                            <Modal show={showUploadModal} onHide={closeDeleteModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Subir video</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleUploadSubmit}>
                                        <Form.Group controlId="formName">
                                            <Form.Label className='mb-1 px-1'>Nombre</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={videoDetails.name}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formDescription">
                                            <Form.Label className='mt-3 mb-1 px-1'>Descripción</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="description"
                                                value={videoDetails.description}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formImage">
                                            <Form.Label className='mt-3 mb-1 px-1'>Imagen de portada</Form.Label>
                                            <Form.Control
                                                type="file"
                                                accept="image/*"
                                                name="image"
                                                onChange={handleInputChange}
                                            />
                                            {videoDetails.image && (
                                                <img src={videoDetails.image} alt="Preview" />
                                            )}
                                        </Form.Group>
                                        <Form.Group controlId="formVideoFile">
                                            <Form.Label className='mt-3 px-1 mb-1'>Archivo de video</Form.Label>
                                            <Form.Control
                                                type="file"
                                                accept="video/*"
                                                name="videoFile"
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className='mt-3 py-2'>
                                            Subir video
                                        </Button>
                                        <Button variant="secondary" onClick={closeUploadModal} className='mt-3 mx-3 py-2'>
                                            Cancelar
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>

                            {/* Card 1 */}
                            <div className="col-md-3 pb-4">
                                <Card>
                                    <Card.Body>
                                        <div>
                                            <img src={imgCamara} className='img-fluid' alt="" />
                                        </div>
                                        <div className='d-flex'>
                                            <Card.Title className='text-center tituloPublica pt-1 px-2'>Sube y publica un video para comenzar.</Card.Title>
                                            <Button className='px-3 py-1' variant="primary" href='#' onClick={openUploadModal}>
                                                Subir video
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            {/* Card 1/ */}

                            {/* MODAL PARA ELIMINAR*/}
                            <Modal show={showDeleteModal} onHide={closeDeleteModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title><MdDelete className='mb-1' /> Confirmar eliminación</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>¿Estás seguro de que quieres eliminar este evento?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={closeDeleteModal}>
                                        Cancelar
                                    </Button>
                                    <Button variant="danger" onClick={handleDeleteSubmit} >
                                        Eliminar
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            {/* MODAL PARA EDITAR */}
                            <Modal show={showEditModal} onHide={closeEditModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title><FaPencilAlt className='mb-2' /> Editar evento</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleEditSubmit}>
                                        <Form.Group controlId="formName">
                                            <Form.Label className='mx-1 mb-1'>Nombre</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={editedValues.name}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formDescription" className='mt-3'>
                                            <Form.Label className='mx-1 mb-1'>Descripción</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="description"
                                                value={editedValues.description}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formImageUrl" className='mt-3'>
                                            <Form.Label className='mx-1 mb-1'>URL de la imagen</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="imageUrl"
                                                value={editedValues.imageUrl}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className='mt-3 py-2'>
                                            Guardar cambios
                                        </Button>
                                        <Button variant="secondary" onClick={closeEditModal} className='mt-3 mx-3 py-2'>
                                            Cancelar
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                            {eventos.map((evento, index) => (
                                <div key={evento.id_evento} className={`col-md-3 position-relative ${hoveredIndex === index ? 'hovered' : ''}`} onClick={() => handleCardClick(evento)}
                                    onMouseEnter={() => handleCardHover(index)}
                                    onMouseLeave={handleCardLeave}>
                                    <Card>

                                        <Card.Img variant="top" src={evento.img_evento || 'ruta_de_imagen_predeterminada.jpg'} />
                                        <a href="#" onClick={openDeleteModal}>
                                            <div className='iconEliminar'><MdDelete /></div>
                                        </a>
                                        <a href="#" onClick={openEditModal}>
                                            <div className='iconEditar'><FaPencilAlt /></div>
                                        </a>
                                        <Card.Body>
                                            <Card.Title>{evento.nombre_evento}</Card.Title>
                                            <div className='text-center'>
                                                <Card.Title>{evento.tipo_deporte}</Card.Title>
                                                <Card.Subtitle className='pt-2'>{evento.fecha_evento}</Card.Subtitle>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}

                            {/* Card 2 */}
                            {/*<div className="col-md-3 position-relative">
                                <Card>
                                    <Card.Img variant="top" src={imgCard} />
                                    <a href="#" onClick={openDeleteModal}>
                                        <div className='iconEliminar'><MdDelete /></div>
                                    </a>
                                    <a href="#" onClick={openEditModal}>
                                        <div className='iconEditar'><FaPencilAlt /></div>
                                    </a>

                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>PARTIDO DE FUTBOL</Card.Title>
                                            <Card.Subtitle className='pt-2'>Boca VS River</Card.Subtitle>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>/*}
                            {/* Card 2/ */}

                            {/* Card 3 */}
                            {/*<div className="col-md-3 position-relative">
                                <Card>
                                    <Card.Img variant="top" src={imgCard} />
                                    <a href="#" onClick={openDeleteModal}>
                                        <div className='iconEliminar'><MdDelete /></div>
                                    </a>
                                    <a href="#" onClick={openEditModal}>
                                        <div className='iconEditar'><FaPencilAlt /></div>
                                    </a>

                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>PARTIDO DE FUTBOL</Card.Title>
                                            <Card.Subtitle className='pt-2'>Boca VS River</Card.Subtitle>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>*/}
                            {/* Card 3/ */}

                            {/* Card 4 */}
                            {/*<div className="col-md-3 position-relative">
                                <Card>
                                    <Card.Img variant="top" src={imgCard} />
                                    <a href="#" onClick={openDeleteModal}>
                                        <div className='iconEliminar'><MdDelete /></div>
                                    </a>
                                    <a href="#" onClick={openEditModal}>
                                        <div className='iconEditar'><FaPencilAlt /></div>
                                    </a>

                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>PARTIDO DE FUTBOL</Card.Title>
                                            <Card.Subtitle className='pt-2'>Boca VS River</Card.Subtitle>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>*/}
                            {/* Card 4/ */}

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Studio;