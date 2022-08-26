// import libraries
import React from "react";

function Footer() {
    return (
        <footer className="box m-3 mt-5 periwinkle-background">
            <h2 className="subtitle is-3 has-text-centered dark-font">How to reach us</h2>
                <div class="mb-1 has-text-centered">
                    <img src="">
                        
                        <a href="mailto:storytherapypodcast@gmail.com" className="dark-font link">
                        storytherapypodcast@gmail.com
                        </a>
                    <br />
                    <a href="https://github.com/lillylav" target="_blank" className="dark-font link">
                    <img src="https://img.icons8.com/ios/50/000000/github--v1.png"/>
                    </a>
                    <a href="https://www.linkedin.com/in/lillyleiran/" target="_blank" className="dark-font link">
                    <img src="https://img.icons8.com/ios/52/000000/linkedin-circled--v1.png"/>
                    </a>
                </div>

        </footer>
    )
}

export default Footer;