import Logo from "../assets/logo.png";
import "./NavBar.css";
import { NavBarLinks } from "./NavBarLinks";

export function NavBar() {
    return (
        <nav className="navbar-container">
            <img src={Logo} alt="In Tutte Le Salse"/>
            <NavBarLinks className="nav-bar-links"/>
        </nav>
    )
}