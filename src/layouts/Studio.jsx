import { Card, Button} from 'react-bootstrap';
import imgCard from '../img/pelota.jpeg';
import imgCamara from '../img/camara.png'
import '../styles/studio.css';
import { FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Studio = () => {
    return (
        <div className='container-fluid fondoEstudio'>
            <h2 className='textoPanel'>Panel de administración</h2>
            <div className="row d-flex flex-wrap">
                {/* Card 1 */}
                <div className="col-md-3 pb-4">
                    <Card>
                        <Card.Body>
                            <div>
                                <img src={imgCamara} className='img-fluid' alt="" />
                            </div>
                            <div className='d-flex'>
                                <Card.Title className='text-center mx-4'>Sube y publica un video para comenzar.</Card.Title>
                                <Button className='px-3 py-2' variant="primary" href='#'>
                                    Subir video
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 1/ */}

                {/* Card 2 */}
                <div className="col-md-3 position-relative">
                    <Card>
                        <Card.Img variant="top" src={imgCard}/>
                        <a href="#">
                            <div className='iconEliminar'><MdDelete /></div>
                        </a>
                        <a href="#">
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
                        <a href="#">
                            <div className='iconEliminar'><MdDelete /></div>
                        </a>
                        <a href="#">
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
                        <a href="#">
                            <div className='iconEliminar'><MdDelete /></div>
                        </a>
                        <a href="#">
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