import React from "react";
import Header from "./Header";
import './Home.css'
import { COLORS } from '../constants/colors';

const Home = () => {
    return (
        <div className="home" style={{ width: '100%' }}>
            <div className="Header" id="header">
                <Header />
            </div>
            <div className="text"
                style={{ height: '90vh' }}>
                <div className="text1">
                    <h1 className="typewriter"
                        style={{ fontSize: '2em', lineHeight: 1.2, color: COLORS.secondary }}>
                        Capture Your<br />
                    </h1>
                </div>
                <div className="text2">
                    <h1 className="typewriter"
                        style={{ fontSize: '2em', lineHeight: 1.2, color: COLORS.yellow }}>
                        Perfect Moments
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Home; 
