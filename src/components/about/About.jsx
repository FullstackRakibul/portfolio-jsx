import React from "react";
import "./about.css";
import "./about.module.css";
import Image1 from "../../assets/icons/rakibul-hasan--rabbi-developer.png";


import AboutBox from './AboutBox';




const About = () => {

    return(
        <>
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image1} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi, I'm Rakibul hasan Rabbi, Full-Stack Web Developer from Bangladesh. I've rich exprience in website design and Development and Customization. I'm good at Python, Django, React Js, Php, Laravel, Vue Js and also WordPress.
                        </p>
                        <a href="#" className="btn">Download My CV </a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name"> Python, Django and React Js </h3>
                                <span className="skills__number ">78%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage django"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name"> Php, Larave and Vue Js </h3>
                                <span className="skills__number ">72%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage laravel"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name"> WordPress </h3>
                                <span className="skills__number ">95%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage wordpress"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name"> Graphics Design </h3>
                                <span className="skills__number ">63%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage graphics"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox/>
        </section>
        </>
    )
}

export default About