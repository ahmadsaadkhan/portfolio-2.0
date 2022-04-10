import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faEnvelope, faHome, faListAlt, faListCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img src={LogoSubtitle} alt="subtitle" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="experience-link" to='/experience'>
                    <FontAwesomeIcon icon={faListAlt} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to='/portfolio'>
                    <FontAwesomeIcon icon={faBoxesStacked} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="skills-link" to='/skills'>
                    <FontAwesomeIcon icon={faListCheck} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                    href="https://www.linkedin.com/in/ahmadsaadkhan/"
                    rel='noopener noreferrer'
                    target='_blank'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a 
                    href="https://github.com/ahmadsaadkhan"
                    rel='noopener noreferrer'
                    target='_blank'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a 
                    href="skype:live:ahmad.saad.khn"
                    rel='noopener noreferrer'
                    target='_blank'
                    >
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;