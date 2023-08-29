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
                    <p >Photography is the art, application, and practice of creating images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.
                    </p><hr className='solid'></hr>
                    <div className="find">
                        <h2>FIND ME</h2>
                        <div className="row pt-2" >
                            <div className="col-6">
                                <div>
                                    <h4>Phone</h4>
                                    <p>+92331-6716750</p>
                                </div>
                                <div >
                                    <h4>Email</h4>
                                    <p>laboosstudio@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <h4>Instagram</h4>
                                    <p>
                                        <a href='https://instagram.com/laboos_studio?igshid=MzRlODBiNWFlZA==' style={{textDecoration:'none',color:COLORS.primary}}>
                                            laboosstudio
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <h4>FaceBook</h4>
                                    <p>
                                        <a href='https://facebook.com/laboos_studio' style={{textDecoration:'none',color:COLORS.primary}}>
                                            laboosstudio
                                        </a>
                                    </p>
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
