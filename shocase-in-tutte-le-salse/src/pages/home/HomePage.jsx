import { NavBar } from "../../components/NavBar";
import backgroundImage from "../../assets/background.png"
import "./HomePage.css";


export function HomePage() {
    return (
        <>
            <NavBar />
            {/* fix position absolute hiding text issue, container main with a margin of 729px top? */}
            <div class="background"> 
                <img src={backgroundImage} alt="" />
            </div>
        </>
    )
}