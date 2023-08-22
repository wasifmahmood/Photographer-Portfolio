import React from "react";
import './Header.css'
import { COLORS } from '../constants/colors';
import { FaSlidersH } from 'react-icons/fa';
import logow from '../image/logo W.png'

const Header = () => {
    return (
        <div className="header d-flex justify-content-between p-4"
            style={{ color: COLORS.secondary, height: '4rem', alignItems: 'center' }}>
            <div style={{ fontFamily: 'cursive',padding:'10px' }}>
                <img src={logow}  width="70"   />
            </div>
            <div className="middle d-flex" style={{ gap: '3rem' }}>
                <span>HOME</span>
                <span>ABOUT</span>
                <span>SERVICE</span>
                <span>CONTACT</span>
            </div>
            <div>
                <FaSlidersH />
            </div>
        </div>
    );
}

export default Header;
