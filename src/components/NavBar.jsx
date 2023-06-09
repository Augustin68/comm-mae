import homeIcon from '../assets/homeicon.svg'
import calendericon from '../assets/calendaricon.svg'
import libraryicon from '../assets/libraryicon.svg'
import { Link, NavLink } from 'react-router-dom';

export function NavBar({navigation}) {


  return (
    <nav className="z-10 navbar-container rounded-r-3xl w-min bg-skin-base bg-opacity-40 border border-skin-base absolute left-0 top-1/2 -translate-y-1/2">
        <ul className="nav-list list-none p-0 m-0">
            <NavLink to={`/`} >
                <li className="nav-item rounded-tr-3xl hover:bg-skin-base p-6">
                        <img className="w-6 h-6 max-w-none" src={homeIcon} alt="home_icon"/>
                </li>
            </NavLink>
            <NavLink to={`/library`}>
                <li className="nav-item hover:bg-skin-base p-6">
                        <img className="w-6 h-6 max-w-none" src={libraryicon} alt="library_icon"/>
                </li>
            </NavLink>
            <NavLink to={`/calendar`}>
                <li className="nav-item rounded-br-3xl hover:bg-skin-base p-6">
                        <img className="w-6 h-6 max-w-none" src={calendericon} alt="calendar_icon"/>
                </li>
            </NavLink>
        </ul>
    </nav>
  );
}
