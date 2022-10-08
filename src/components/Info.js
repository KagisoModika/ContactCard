import React from "react";
import mypicture from "../images/my-picture.jpg";
import "../index.css";

function Info() {
    return (
        <div className="info-section">
            <img src={mypicture} className="avatar" alt="my-profile" />
            <h1 className="name">Kagiso Modika</h1>
            <h4 className="position">Front End Developer</h4>
            <a href="https://#" className="portfolio-link">Portfolio Link</a>
            <div className="button-section">
                <button className="primary">Email</button>
                <button className="secondary">LinkedIn</button>
            </div>
        </div>
    )
}

export default Info;