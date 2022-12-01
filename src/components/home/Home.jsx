import React from "react";
import "./home.css";
import Me from '../../assets/icons/Rakibul Hasan Rabbi-developer.png'
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";



const Home = () => {
    return(<>
    <section className="home containe" id="home">
        <div className="intro">
            <img src={Me} alt="Rakibul hasan Rabbi" className="home__img" />
            <h1 className="home__name">Rakibul Hasan Rabbi</h1>
            <span className="home__education">I am a Full-Stack Developer</span>

            <HeaderSocials/>

            <a href="#contact" className="btn"> Hire me </a>

            <ScrollDown/>
        </div>
        <Shapes/>
    </section>
    </>)
}

export default Home