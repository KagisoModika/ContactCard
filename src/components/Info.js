import React from "react";
//import mypicture from "../images/my-picture.jpg";
import "../index.css";
import Contact from "../Contact";

function Info() {
    return (
        <div className="info-section">
            <Contact 
                name = "Kagiso Modika"
                position = "Software Engineer"
                link = "https://www.kagisomodika.com"
            />
        </div>
    )
}

export default Info;
