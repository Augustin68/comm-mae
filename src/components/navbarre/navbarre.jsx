
import './navbarre.css'
import homeIcon from '../../assets/homeicon.svg'
import calendericon from '../../assets/calendaricon.svg'
import libraryicon from '../../assets/libraryicon.svg'
import { Link } from 'react-router-dom';

export function Navbarre() {
  return (
    <nav className="navbar-container rounded-r-3xl">
        <ul className="nav-list">
            <Link to={`/`} >
                <li className="nav-item rounded-tr-3xl">
                        <img className="nav-icon" src={homeIcon} alt="home_icon"/>
                </li>
            </Link>
            <Link to={`/library`}>
                <li className="nav-item">
                        <img className="nav-icon" src={libraryicon} alt="library_icon"/>
                </li>
            </Link>
            <Link to={`/calendar`}>
                <li className="nav-item rounded-br-3xl">
                        <img className="nav-icon" src={calendericon} alt="calendar_icon"/>
                </li>
            </Link>
        </ul>
    </nav>
  );
}
