import '../styles/footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaArrowAltCircleUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };

    return(
        <>
          <footer className='mt-2'>
            <div className="social-media">
              <p>¡Contactanos!</p>
              <div className="social-icons">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
            <div className="copyright">
              <p>&copy; 2023 Pico Deportes</p>
            </div>
            <div className="back-to-top mx-3">
              <button onClick={scrollToTop}>Volver al inicio <FaArrowAltCircleUp className='iconVolver' /></button>
            </div>
        </footer>
        </>
    )
}
export default Footer;