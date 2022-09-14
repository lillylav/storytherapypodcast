// import libraries
import React from "react";

// import image
import lillyImg from "../img/lilly.jpg";
import nameImg from "../img/name.png";

function About() {
    return (

        <section id="about" className="box m-3 mt-5 has-text-centered periwinkle-background">
            <img src={ nameImg } id="name-img" className="" style={{ width: "75%" }} alt="" />
            <div className="columns p-4">
                <div className="column is-one-third periwinkle-background">
                    <img src={ lillyImg } id="lilly-img" className="" style={{ width: "100%" }} alt="A late twenties white woman with a shoulder length straight blonde hair and brown eyes smiling with a brown puppy" />
                </div>
                <div className="column is-two-thirds periwinkle-background">
                    <p class="mb-2 dark-font">
                        Do you love seeking the best version of yourself? Do you love stories? 
                    </p>
                    <p class="mb-2 dark-font">
                        I believe when we understand the stories we love, understand the stories we tell, &amp; share &amp; interpret stories together, we begin to connect more to our truest selves, our bodies, our humanity, presence, &amp; the flow of life. 
                    </p>
                    <p class="mb-2 dark-font">
                        So, in an attempt to share the transformative power of stories... Lilly shares her stories, thoughts on her favorite stories, ideas she's workshopping, &amp; conversations with others about the stories they love &amp; why they love them.
                    </p>
                    <p class="mb-2 dark-font">
                        Thank you for being here.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;