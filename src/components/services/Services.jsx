import React from "react";
import "./services.css";

import Image1 from "../../assets/icons/service-1.svg";
import Image2 from "../../assets/icons/service-2.svg";
import Image3 from "../../assets/icons/service-3.svg";

const data = [
    {
        id:1,
        image:Image1,
        title:"Website Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque nostrum natus suscipit excepturi voluptatem nihil enim eum sint expedita?"
    },
    {
        id:2,
        image:Image2,
        title:"Website Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque nostrum natus suscipit excepturi voluptatem nihil enim eum sint expedita?"
    },
    {
        id:3,
        image:Image3,
        title:"Website Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque nostrum natus suscipit excepturi voluptatem nihil enim eum sint expedita?"
    }
]



const Services = () => {

    return(<>
    <section className="services container section" id="services">
        <h2 className="section__title">Services</h2>
        <div className="services__container grid">
            {data.map(({id, image, title, description}) =>{
             return (
                <div className="services__card" key={id}>
                    <img src={image} alt="" className="services__img"/>
                    <h3 className="services__title">{title}</h3>
                    <p className="services__description">{description}</p>
                </div>
             );   
            })}
        </div>
    </section>
    
    
    </>)
}

export default Services