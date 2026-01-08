import { NavLink } from "react-router";
import "./NavBarLinks.css";

export function NavBarLinks() {
    return (
        <div className="nav-bar-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-us">Chi siamo</NavLink>
            <NavLink to="/products">I Nostri Prodotti</NavLink>
            <NavLink to="/contacts">Contatti</NavLink>
        </div>
    )
}