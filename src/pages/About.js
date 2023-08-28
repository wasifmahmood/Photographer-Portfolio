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
                    <div className="find">
                        <h2>FIND ME</h2>
                        <div className="row pt-2" >
                            <div className="col-6">
                                <div>
                                    <h4>Phone</h4>
                                    <p>0331-6716750</p>
                                </div>
                                <div >
                                    <h4>Email</h4>
                                    <p>laboosstudio@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <h4>Instagram</h4>
                                    <p>laboosstudio</p>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>123</p>
                                </div>
                            </div>
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
