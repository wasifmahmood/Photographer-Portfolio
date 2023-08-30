import React from "react";
import './Service.css'
import { COLORS } from '../constants/colors';
import { AiOutlineForward } from "react-icons/ai";
import { SiAdobelightroom, SiAdobepremierepro, SiAdobephotoshop } from "react-icons/si";

const Service = () => {
    return (
        <>
            <div className="Main">
                <div className="service"
                    style={{ backgroundColor: COLORS.primary, color: COLORS.yellow }}>
                    <div className="d-flex">
                        <div className="left text-center ">
                            <h1>SERVICES</h1>
                            <span>"Elecvting Your Vision,Frame by Frame"</span>
                        </div>
                        <div className="right row">
                            <div className="col-6">
                                <span className="d-block icon"><AiOutlineForward size={30} style={{ paddingRight: '10px' }} />Wedding Photography</span>
                                <span className="d-block icon"><AiOutlineForward size={30} style={{ paddingRight: '10px' }} />Event Photography</span>
                                <span className="d-block icon"><AiOutlineForward size={30} style={{ paddingRight: '10px' }} />Corporate Event Photography</span>
                                <span className="d-block icon"><AiOutlineForward size={30} style={{ paddingRight: '10px' }} />Fashion Photography</span>
                            </div>
                            <div className="col-6">
                                <span className="d-block icon"><AiOutlineForward size={30} style={{ paddingRight: '10px' }} />Photography</span>
                                <span className="d-block icon"><AiOutlineForward size={30} style={{ paddingRight: '10px' }} />Photography</span>
                                <span className="d-block icon"><AiOutlineForward size={30} style={{ paddingRight: '10px' }} />Photography</span>
                                <span className="d-block icon"><AiOutlineForward size={30} style={{ paddingRight: '10px' }} />Photography</span>
                            </div>
                        </div>
                        <div style={{ backgroundImage: "url('../image/service.jpg')" }}></div>


                    </div>
                </div>
                <div className="expertise" style={{ backgroundColor: COLORS.yellow, color: COLORS.primary }}>
                    <div className="left text-center">
                        <h1>EXPERTISE</h1>
                        <span>Main Software</span>
                    </div>
                    <div className="right row pt-4">
                        <div className="col-4">
                            <span className="d-block"><SiAdobelightroom size={40} style={{ paddingRight: '10px' }} />Lightroom</span>
                        </div>
                        <div className="col-4">
                            <span className="d-block"><SiAdobepremierepro size={40} style={{ paddingRight: '10px' }} />Adobe Premiere Pro</span>
                        </div>
                        <div className="col-4">
                            <span className="d-block"><SiAdobephotoshop size={40} style={{ paddingRight: '10px' }} />PhotoShop</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
