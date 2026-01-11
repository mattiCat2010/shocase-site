import "./HeroText.css";
import lineSeparator from "../assets/line-separator.png";

export function HeroText () {
    return (
        <div className="hero-text-container">
            <h1 className="abhaya-libre-regular" >In <strong className="abhaya-libre-bold" >Tutte</strong></h1>
            <br></br>
            <h1 className="abhaya-libre-regular" >Le <strong className="abhaya-libre-bold" >Salse</strong></h1>
            <img src={lineSeparator} alt="" />
        </div>
    )
}