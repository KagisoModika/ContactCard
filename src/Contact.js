import React from "react";
import mypicture from "./images/my-picture.jpg";

function Contact(props) {
    return (
        <div className="info-section">
            <img src={mypicture} className="avatar" alt="my-profile" />
            <h1 className="name">{props.name}</h1>
            <h4 className="position">{props.position}</h4>
            <a href={props.link} className="portfolio-link">Portfolio Link</a>
            <div className="button-section">
                <button className="primary">Email</button>
                <button className="secondary">LinkedIn</button>
            </div>
        </div>
    );
}

export default Contact;