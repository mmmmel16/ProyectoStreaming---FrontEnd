import { Card, Button, Modal, Form} from 'react-bootstrap';
import imgCard from '../img/pelota.jpeg';
import imgCamara from '../img/camara.png'
import '../styles/studio.css';
import { FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import React, { useState } from 'react';

const Studio = () => {
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

    const openDeleteModal = () => {
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

    return (
        <div className='container-fluid fondoEstudio'>
            <h2 className='textoPanel'>Panel de administración</h2>
            <div className="row d-flex flex-wrap">

            {/* MODAL SUBIR VIDEO */}
            <Modal show={showUploadModal} onHide={closeUploadModal}>
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
                                <Card.Title className='text-center mx-4'>Publica tu video</Card.Title>
                                <Button className='px-3 py-2' variant="primary" href='#' onClick={openUploadModal}>
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
                        <Button variant="danger">
                            Eliminar
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* MODAL PARA EDITAR */}
                <Modal show={showEditModal} onHide={closeEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title><FaPencilAlt className='mb-2'/> Editar evento</Modal.Title>
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
            

                {/* Card 2 */}
                <div className="col-md-3 position-relative">
                    <Card>
                        <Card.Img variant="top" src={imgCard}/>
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
                </div>
                {/* Card 2/ */}

                {/* Card 3 */}
                <div className="col-md-3 position-relative">
                    <Card>
                        <Card.Img variant="top" src={imgCard}/>
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
                </div>
                {/* Card 3/ */}

                {/* Card 4 */}
                <div className="col-md-3 position-relative">
                    <Card>
                        <Card.Img variant="top" src={imgCard}/>
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
                </div>
                {/* Card 4/ */}
                
            </div>
        </div>
    );
};

export default Studio;