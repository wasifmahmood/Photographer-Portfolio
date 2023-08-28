import React from "react";
import './Header.css'
import { COLORS } from '../constants/colors';
import { FaSlidersH } from 'react-icons/fa';
import logow from '../image/logo W.png'
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

const Header = () => {
    const [state, setState] = React.useState({
        right: false,
    });
    const topDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={topDrawer(anchor, false)}
            onKeyDown={topDrawer(anchor, false)}
        >
            <List>
                <div className="middle d-flex"
                    style={{ padding: '40px' }}
                >
                    <a style={{ color: COLORS.yellow }} href="#about">ABOUT</a>
                    <a style={{ color: COLORS.primary }} href="#service">SERVICE</a>
                    <a style={{ color: COLORS.primary }} href="#portfolio">PORTFOLIO</a>
                    <a style={{ color: COLORS.primary }} href="#contact">CONTACT</a>
                </div>
            </List>
        </Box>
    );
    return (
        <div className="header d-flex justify-content-between p-4"
            style={{ color: COLORS.secondary, height: '4rem', alignItems: 'center' }}>
            <div className='logo' style={{ fontFamily: 'cursive', padding: '10px' }}>
                <img src={logow} width="70" />
            </div>
            <div className="middle d-flex" style={{ gap: '3rem' }}>
                <a style={{ color: COLORS.yellow }} href="#about">ABOUT</a>
                <a style={{ color: COLORS.secondary }} href="#service">SERVICE</a>
                <a style={{ color: COLORS.secondary }} href="#portfolio">PORTFOLIO</a>
                <a style={{ color: COLORS.secondary }} href="#contact">CONTACT</a>
            </div>
            <div className='menubtn'>
                <Button onClick={topDrawer('right', true)}>
                    <div className='menu'><FaSlidersH size={25} style={{ color: COLORS.secondary }} /></div>
                </Button>
                <Drawer
                    anchor="right"
                    open={state['right']}
                    onClose={topDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
            </div>
        </div>
    );
}

export default Header;
