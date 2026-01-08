import { NavLink } from "react-router";

export function NavBarLinks() {
    return (
        <div className="link-container">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/about-us">
                Chi siamo
            </NavLink>
            <NavLink to="/products">
                I Nostri Prodotti
            </NavLink>
            <NavLink to="/contacts">
                Contatti
            </NavLink>
        </div>
    )
}