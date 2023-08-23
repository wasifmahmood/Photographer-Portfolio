import React from "react";
import './About.css'
import { COLORS } from '../constants/colors';
import PIC from '../image/PIC.jpg'



const About = () => {
    return (
        <>
            <div className="about d-flex" style={{ backgroundColor: COLORS.yellow, color: COLORS.primary }}>
                <div className="Data ">
                    <h1>ABOUT ME</h1>
                    <p > To change font type purely with HTML, use the CSS font-family property. Set it to the value you want and place it inside a style attribute. Then add this style attribute to an HTML element, like a paragraph, heading, button, or span tag.
                    </p><hr className='solid'></hr>
                    <div className="service">
                        <h2>Services</h2>
                        <div className="">
                            <p>Event Photography</p>
                            <p>Fashion Photography</p>
                            <p>Wedding Photography</p>
                            <p>Birthday Photography</p>
                            <p>Model Photography</p>
                        </div>
                    </div>
                </div>
                <div className="pic ">
                    <img className="img" src={PIC} />
                </div>
            </div>
        </>
    );
}

export default About;
