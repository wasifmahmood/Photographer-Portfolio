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
            <div style={{ position: 'static',height:'90vh',color: COLORS.secondary}}>
                <h1 style={{verticalAlign:'middle'}}>CAPTURE YOUR</h1>
            </div>
        </div>
    );
}

export default Home;
