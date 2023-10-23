import '../styles/navbar.css';
import { BiSearch, BiChevronDown, BiBell} from "react-icons/bi"; // Importa los íconos de React Icons
import imgAvatar from '../img/avatar1.jpg';


const NavbarExample = () => {
    return(
        <>
            <nav className="navbar">
                <div className="container">
                    <form className="mx-auto d-flex" role="buscar">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className='profile'>
                        <div className='avatar-container'>
                            <img src={imgAvatar} alt="Profile Avatar" className='avatar'/>
                        </div>
                    </div>
                    <span className="user-name">Javier</span>
                    <button className='btn' id="profileButton" data-bs-toggle="dropdown">
                        <BiChevronDown className='dropdown' />
                    </button>
                    <button className='btn'>
                        <BiBell className='bibell'/>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default NavbarExample