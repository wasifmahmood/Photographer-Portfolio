import React from "react";
import './Portfolio.css'
import { COLORS } from '../constants/colors';
import logow from '../image/logo W.png';
import logob from '../image/logo B.png';


const Portfolio = () => {
    return (
        <>
            <div className="fashion-main" style={{ backgroundColor: COLORS.primary, color: COLORS.yellow }}>
                <div className="fashion" style={{ backgroundColor: COLORS.primary, color: COLORS.yellow }}>
                    <div className="d-flex">
                        <h2>FASHION SHOTS</h2>
                    </div>
                    <div className="image-container">
                        <img className="fimg" src={logow} alt="Logo White" />
                        <img className="fimg" src={logob} alt="Logo Black" style={{backgroundColor:COLORS.secondary}}/>
                        <img className="fimg" src={logow} alt="Logo White" />
                        <img className="fimg" src={logob} alt="Logo Black" style={{backgroundColor:COLORS.secondary}}/>

                    </div>
                </div>
                <div className="wedding">
                    <div className="d-flex">
                        <h2>WEDDING PHOTO</h2>
                    </div>
                    <div className="image-container">
                        <img className="fimg" src={logow} alt="Logo White" />
                        <img className="fimg" src={logob} alt="Logo Black" style={{backgroundColor:COLORS.secondary}}/>
                        <img className="fimg" src={logow} alt="Logo White" />
                        <img className="fimg" src={logob} alt="Logo Black" style={{backgroundColor:COLORS.secondary}}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
