import React, { useEffect, useState } from 'react';
import './About.css';

export default function About() {
    // This is the about page, make it to whatever you want people to see when the click the about page

    let boxes = [
        {
            // All of the text for the mission should go here
            title: "Our Mission?",
            text: "Flash Forward is a nonprofit organization dedicated to empowering communities without reliable electricity through sustainable lighting solutions. By distributing solar-powered flashlights and other innovative tools, we aim to improve safety, education, and health for those who need it most."
        },
        {   
            // All of the text for the currently doing should go here
            title: "What Are We Currently Doing?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {   
            // All of the text for the who we are should go here
            title: "Who Are We?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]

    const [index, setIndex] = useState(0);

    const changeIndex = (d) => {
        // set the index to whatever the index is + d
        setIndex(Math.max(0, Math.min(boxes.length-1, index+d)));
    }

    return (
        <>  
            {/* placeholder image */}

            <div className="content">
                <div className="bg-image"></div>
                <div className="box">
                    <div className="buttonContainer">
                        <button onClick={() => changeIndex(-1)}>&#x25B2;</button>
                        <button onClick={() => changeIndex(1)}>&#x25BC;</button>
                    </div>
                    <div className="info">
                        <h2>{boxes[index].title}</h2>
                        <p>{boxes[index].text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}