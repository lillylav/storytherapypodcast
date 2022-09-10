// import libraries
import React from "react";

import thumbnail from "../img/thumbnail.png";

function Listen() {
    return (
        <section className="box columns is-centered is-vcentered m-3 mt-5 periwinkle-background">
            <div className="column is-full-mobile has-text-centered">
            <h3 className="subtitle is-3 has-text-centered dark-font">Listen & Subscribe</h3>
                <div className="columns is-centered is-vcentered">
                    <div className="column has-text-centered">
                        <a href="https://open.spotify.com/show/2jIln2x3n06beogkLmELKt" target="_blank" className="dark-font link">
                            <h3 className="subtitle is-4 has-text-centered dark-font">Spotify</h3>
                            <img src="https://img.icons8.com/ios-filled/50/000000/spotify.png"/>
                        </a>
                    </div>
                    <div className="column has-text-centered">
                        <a href="https://podcasts.apple.com/us/podcast/story-therapy-podcast/id1641952821" target="_blank" className="dark-font link">
                            <h3 className="subtitle is-4 has-text-centered dark-font">Apple Podcasts</h3>
                            <img src="https://img.icons8.com/material-rounded/60/000000/apple-podcasts.png"/>
                        </a>
                    </div>
                    <div className="column has-text-centered">
                        <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82NWQzYTI3NC9wb2RjYXN0L3Jzcw==" target="_blank" className="dark-font link">
                            <h3 className="subtitle is-4 has-text-centered dark-font">Google Podcasts</h3>
                            <img src="https://img.icons8.com/ios-filled/50/000000/google-podcasts.png"/>
                        </a>
                    </div>
                </div>
                <h3 className="subtitle is-4 has-text-centered dark-font">Top Episodes</h3>
                <div className="columns is-centered episodes">
                    <iframe src="https://anchor.fm/lilly-leiran/embed/episodes/Lilly--On-Hope--Trust-e155qj6/a-a682o7g" height="102px" width="400px" frameborder="0" scrolling="no" className="column episode"></iframe>
                    <iframe src="https://anchor.fm/lilly-leiran/embed/episodes/Lilly--On-Intentional-Stories-e183ojf/a-a6lh2f3" height="102px" width="400px" frameborder="0" scrolling="no" className="column episode"></iframe>
                    <iframe src="https://anchor.fm/lilly-leiran/embed/episodes/A-Poem--Rules-for-Surviving-the-Apocalypse-e155q6o/a-a682l6b" height="102px" width="400px" frameborder="0" scrolling="no" className="column episode"></iframe>
                    <iframe src="https://anchor.fm/lilly-leiran/embed/episodes/Lilly--On-Identity--Humility-e1711p7/a-a6ftq96" height="102px" width="400px" frameborder="0" scrolling="no" className="column episode"></iframe>
                    <iframe src="https://anchor.fm/lilly-leiran/embed/episodes/A-Conversation-wLindsey--On-Sexuality--Living-A-Turned-On-Life-e18u9bi/a-a6njad2" height="102px" width="400px" frameborder="0" scrolling="no" className="column episode"></iframe>
                    <iframe src="https://anchor.fm/lilly-leiran/embed/episodes/A-Poem--10-Things-I-Love-About-You-A-Love-Letter-to-Me-e155nl6/a-a6828cu" height="102px" width="400px" frameborder="0" scrolling="no" className="column episode"></iframe>
                </div>
            </div>

        </section>
    )
}

export default Listen;