import React from "react";
import "./style.css"
import img1 from "./Assets/images/heroimage.png"

 function Chibuike() {
    return (
        <section className="main-container">
            <div className="hero">
            <img src={img1} alt="Hero Image" className="hero-image" />
                

                <div className="hero-text">
                <h1>HI, MY NAME IS CHUKWUKUBUIKEM MOSES NKEMDILIM</h1>
                <p>I'M A FULL-STACK DEVELOPER AND UI DESIGNER </p>
                </div>
            </div>
        </section>
        
    )
}
export default Chibuike