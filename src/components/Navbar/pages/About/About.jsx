import React, { useEffect, useState } from 'react';
import './About.css';
import { Fade } from 'react-reveal';

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
            text: " - Develop Solar Lighting Prototypes: We are building and testing solar-powered flashlights and lamps tailored to the specific needs of communities without reliable electricity. | - Raise Awareness and Funds: Through our GoFundMe campaign, we are sharing our mission and gathering the resources needed to kickstart production and distribution. | - Collaborate and Research: We are identifying communities that will benefit most from our solutions, while building partnerships with other nonprofits and organizations. | - Launch Our Online Platform: We're designing a website to share updates, connect with supporters, and provide transparent insights into our work and impact."
        },
        {   
            // All of the text for the who we are should go here
            title: "Who Are We?",
            text: "At Flash Forward, we are a passionate team of high school students dedicated to making a lasting impact on communities with limited access to reliable electricity. Our nonprofit focuses on designing and distributing sustainable, solar-powered lighting solutions to empower individuals in underserved regions. With a shared vision of creating brighter futures, we aim to improve education, safety, and overall quality of life for those who need it most. We believe that something as simple as light can spark opportunity, hope, and progress. By leveraging creativity, teamwork, and technology, we strive to bridge the gap between innovation and accessibility, bringing light where it’s needed most."
        },
    ]

    const [index, setIndex] = useState(0);

    const changeIndex = (d) => {
        // set the index to whatever the index is + d
        setIndex(Math.max(0, Math.min(boxes.length-1, index+d)));
    }

    function Fader({ side, children, ...props }) {
        if (side == "left") {
            return (
                <Fade left {...props}>
                    {children}
                </Fade>
            )
        } else if (side == "right") {
            return (
                <Fade right {...props}>
                    {children}
                </Fade>
            )
        }
    }

    return (
        <>  
            {/* placeholder image */}

            <div className="content">
                <div className="bg-image"></div>
                {/* by putting the key, this forces the program to re-reveal this element */}
                <Fader side={index%2 == 1? "right": "left"} key={crypto.randomUUID()}>
                    <div id="box" className={index%2 == 1? "float-right": "float-left"}>
                        <div className="buttonContainer">
                            <button onClick={() => changeIndex(-1)}>&#x25B2;</button>
                            <button onClick={() => changeIndex(1)}>&#x25BC;</button>
                        </div>
                        <div className="info">
                            <h2>{boxes[index].title}</h2>
                            {boxes[index].text.split("|").map(text => <p key={crypto.randomUUID()}>{text}</p>)}
                        </div>
                    </div>
                </Fader>
            </div>
        </>
    )
}