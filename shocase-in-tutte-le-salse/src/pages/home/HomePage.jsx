import { NavBar } from "../../components/NavBar";
import backgroundImage from "../../assets/background.png"
import "./HomePage.css";
import { HeroText } from "../../components/HeroText";


export function HomePage() {
    return (
        <>
            <NavBar />
            <div className="hero">
                <HeroText />
                <div className="background">
                    <img src={backgroundImage} alt="" />
                </div>
            </div>
            
            {/* Main container (to fix pos absolute problem) */}
            <div className="home-main-container">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia debitis ducimus, dolores quaerat veniam, ipsam, perspiciatis tempora quidem atque minima quae esse cum quod autem maiores nisi sint. Ut, necessitatibus.
                </p>
            </div>
        </>
    )
}