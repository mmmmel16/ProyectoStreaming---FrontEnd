import '../styles/sidebar.css';
import { SlActionRedo } from 'react-icons/sl';
import { ImFeed } from "react-icons/im";
import { BiCaretRightSquare } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BsKanban } from "react-icons/bs";


const Sidebar = () => {

    return (
        <div id="sidebar" className="contenedorSide">

            {/* MENU */}
            <h2 className='text-white menu'>Menú</h2>
            <div className='d-flex justify-content-center align-items-center'>
                <ul className="nav flex-column align-items-start">

                    <li className="nav-item">
                        <a className="nav-link text-white d-flex align-items-center" href="#">
                            <div className="contenedorIcon d-flex align-items-center justify-content-center me-2"><SlActionRedo /></div>
                            <span className="icon">Próximos</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white d-flex align-items-center" href="/vivo">
                            <div className="contenedorIcon d-flex align-items-center justify-content-center me-2"><ImFeed /></div>
                            <span className="icon">En vivo</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white d-flex align-items-center" href="#">
                            <div className="contenedorIcon d-flex align-items-center justify-content-center me-2"><BiCaretRightSquare /></div>
                            <span className="icon">Pasados</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white d-flex align-items-center" href="#">
                            <div className="contenedorIcon d-flex align-items-center justify-content-center me-2"><BiBookmark /></div>
                            <span className="icon">Guardados</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white d-flex align-items-center" href="#">
                            <div className="contenedorIcon d-flex align-items-center justify-content-center me-2"><BsKanban /></div>
                            <span className="icon">Resultados</span>
                        </a>
                    </li>
                </ul>
            </div>

            <hr className='hr' />

            {/* CATEGORIA */}
            <h2 className='text-white menu'>Categoria</h2>
            <div className='d-flex justify-content-center align-items-center pb-5'>
                <ul className="nav flex-column align-items-start my-1">

                    <li className="nav-item">
                        <a className="nav-link text-white d-flex align-items-center" href="#">
                            <div className="contenedorIcon d-flex align-items-center justify-content-center me-2"><IoMdFootball /></div>
                            <span className="icon">Fubol</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white d-flex align-items-center" href="#">
                            <div className="contenedorIcon d-flex align-items-center justify-content-center me-2"><IoIosBasketball /></div>
                            <span className="icon">Basquet</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white d-flex align-items-center" href="#">
                            <div className="contenedorIcon d-flex align-items-center justify-content-center me-2"><IoMdBasketball /></div>
                            <span className="icon">Cesto</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white d-flex align-items-center" href="#">
                            <div className="contenedorIcon d-flex align-items-center justify-content-center me-2"><IoIosWalk /></div>
                            <span className="icon">Running</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white d-flex align-items-center" href="#">
                            <div className="contenedorIcon d-flex align-items-center justify-content-center me-2"><IoIosTennisball /></div>
                            <span className="icon">Tenis</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Sidebar;
