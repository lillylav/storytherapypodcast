// import libraries
import React from "react";

// import image
import logoImage from "../img/logo.png";


function Nav() {
    return (
        <header className="header">
            <nav className="navbar nav-items" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="hover-ignore">
                        <img src={ logoImage } id="logo" className="" alt="'Story Therapy Podcast' with a microphone surrounded by headphones" />
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu navbar-end periwinkle-background">
                    <a href="#about" className="navbar-item is-size-4" activeClassName="selected">
                        About
                    </a>
                    <a href="#listen" className="navbar-item is-size-4">
                        Listen
                    </a>
                    <a href="#engage" className="navbar-item is-size-4">
                        Engage
                    </a>
                    <a href="#stories" className="navbar-item is-size-4">
                        Story Recs
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Nav;