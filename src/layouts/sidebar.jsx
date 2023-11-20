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
            <ul className="nav flex-column align-items-start py-2 px-5">

                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        <div className="contenedorIcon"><SlActionRedo /></div>
                        <span className="icon">Próximos</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/vivo">
                        <div className="contenedorIcon"><ImFeed /></div>
                        <span className="icon">En vivo</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        <div className="contenedorIcon"><BiCaretRightSquare /></div>
                        <span className="icon">Pasados</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        <div className="contenedorIcon"><BiBookmark /></div>
                        <span className="icon">Guardados</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        <div className="contenedorIcon"><BsKanban /></div>
                        <span className="icon">Resultados</span>
                    </a>
                </li>
            </ul>

            <hr className='hr' />

            {/* CATEGORIA */}
            <h2 className='text-white menu'>Categoria</h2>
            <ul className="nav flex-column align-items-start py-3 px-5">

                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        <div className="contenedorIcon"><BsKanban /></div>
                        <span className="icon">Fubol</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        <div className="contenedorIcon"><BsKanban /></div>
                        <span className="icon">Basquet</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        <div className="contenedorIcon"><BsKanban /></div>
                        <span className="icon">Cesto</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        <div className="contenedorIcon"><BsKanban /></div>
                        <span className="icon">Running</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        <div className="contenedorIcon"><BsKanban /></div>
                        <span className="icon">Tenis</span>
                    </a>
                </li>
            </ul>
        </div>

    );
};

export default Sidebar;
