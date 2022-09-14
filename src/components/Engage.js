// import libraries
import React from "react";

import engageImg from "../img/engage-header.png";

function Engage() {
    return (
        <section className="box m-3 mt-5 has-text-centered periwinkle-background">
            <img src={ engageImg } id="name-img" className="" style={{ width: "65%" }} alt="" />
            <div className="mb-1 has-text-centered">
                <a href="https://www.instagram.com/storytherapypodcast/" target="_blank" className="dark-font link">
                    <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/55/000000/external-camera-instagram-flatart-icons-outline-flatarticons.png"/>
                </a>
                <a href="mailto:storytherapypodcast@gmail.com" className="dark-font link">
                    <img src="https://img.icons8.com/pastel-glyph/55/000000/new-post--v2.png" />
                </a>
            </div>

        </section>
    )
}

export default Engage;