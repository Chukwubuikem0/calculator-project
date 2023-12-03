// import React from "react";
// import "./style.css"
// import img1 from "./Assets/images/heroimage.png"

//  function Chibuike() {
//     return (
//         <section className="main-container">
//             <div className="hero">
//             <img src={img1} alt="Hero Image" className="hero-image" />


//                 <div className="hero-text">
//                 <h1>HI, MY NAME IS CHUKWUKUBUIKEM MOSES NKEMDILIM</h1>
//                 <p>I'M A FULL-STACK DEVELOPER AND UI DESIGNER </p>
//                 </div>
//             </div>
//         </section>

//     )
// }
// export default Chibuike

import React from "react";
import "./style.css"
import { useState, useEffect } from "react"
import axios from "axios"
import img1 from "./Assets/images/doglogo2.png"



function DogApp () {
    const [uloma, setUloma] = useState([])
    // console.log(uloma)
    // setUloma("chuks")
    // console.log(uloma)

    // async function fetchData() {
    //     const response = await fetch("url");
    //     const data = await response.json()
    // }

    // useEffect(async () => {
    //     const response = await fetch("https://restcountries.com/v3.1/all");
    //     const data = await response.json(

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("https://dog.ceo/api/breed/hound/images");
            // const data = await response.json()
            setUloma(response.data.message)
            console.log(response.data.message)
        }

        fetchData()
    }, [])

    return (
        <>
            <div className="main">
                <div className="navbar">
                    
                        <img src={img1} alt="Dog logo" className="dog-logo"/>
                    
                    <ul className="navbar-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Breeds</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="image">
                    {
                        uloma.slice(0, 48).map((element) => {
                            return (
                                <img className="images" src={element} />
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
export default DogApp