// import libraries
import React from "react";

import storyRecsImg from "../img/story-recs-header.png";

function Recs() {
    return (
        <section id="recs" className="box columns is-centered is-vcentered m-3 mt-5 periwinkle-background">
            <img src={ storyRecsImg } id="name-img" className="" style={{ width: "65%" }} alt="" />
        </section>
    )
}

export default Recs;