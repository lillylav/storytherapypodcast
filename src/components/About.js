// import libraries
import React from "react";

// import image
import coverImage from "../img/lilly.jpg";

function About() {
    return (
        <section id="about" className="box m-3 mt-5 periwinkle-background">
            <h2 className="title is-2 has-text-centered dark-font">Story Therapy Podcast</h2>
            <h3 className="subtitle is-5 has-text-centered dark-font">We see ourselves better when we're seen</h3>
            <div className="columns">
                <div className="column is-one-third periwinkle-background">
                    <img src={ coverImage } id="lilly-img" className="" style={{ width: "100%" }} alt="A late twenties white woman with a shoulder length straight blonde hair and brown eyes smiling" />
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