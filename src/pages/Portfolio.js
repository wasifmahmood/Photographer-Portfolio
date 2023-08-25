import React from "react";
import './Portfolio.css'
import { COLORS } from '../constants/colors';
import logow from '../image/logo W.png';
import logob from '../image/logo B.png';
import BBQ from '../image/BBQ.png';
import Chicken from '../image/Chicken.png';
import Fries from '../image/Fries.png';
import Sticks from '../image/Sticks.png';
import Grilled from '../image/Grilled.png';
import Kentucky from '../image/Kentucky.png';
import Smash from '../image/Smash.png';
import Smokehouse from '../image/Smokehouse.png';
import Smoky from '../image/Smoky.png';
import Fajita from '../image/Fajita.png';
import Mughalai from '../image/Mughalai.png';
import SmokyCroissant from '../image/SmokyCroissant.png';
import Tikka from '../image/Tikka.png';
import LotusBrownie from '../image/LotusBrownie.png';
import MarksMudBrownie from '../image/MarksMudBrownie.png';
import MoltenLava from '../image/MoltenLava.png';
import CashewnutChicken from '../image/CashewnutChicken.png';
import StreetStyleChowmein from '../image/StreetStyleChowmein.png';
import SweetAndSour from '../image/SweetAndSour.png';
import FriedRice from '../image/FriedRice.png';
import ChickenAlfredoFettuccine from '../image/ChickenAlfredoFettuccine.png';
import BakeWhitePasta from '../image/BakeWhitePasta.png';
import creamymuglaI from '../image/creamymuglaI.png';
import GrilledChickenSandwich from '../image/GrilledChickenSandwich.png';


const Portfolio = () => {
    return (
        <>
            <div className="fashion-main p-4" style={{ backgroundColor: COLORS.primary, color: COLORS.yellow }}>
                <div className="fashion p-4">
                    <div className="d-flex">
                        <h2>FASHION SHOTS</h2>
                    </div>
                    <div className="image-container">
                        <img className="fimg" src={logow} alt="Logo White" />
                        <img className="fimg" src={logob} alt="Logo Black" style={{ backgroundColor: COLORS.secondary }} />
                        <img className="fimg" src={logow} alt="Logo White" />
                        <img className="fimg" src={logob} alt="Logo Black" style={{ backgroundColor: COLORS.secondary }} />

                    </div>
                </div>
                <div className="wedding p-4">
                    <div className="d-flex">
                        <h2>WEDDING PHOTO</h2>
                    </div>
                    <div className="image-container">
                        <img className="fimg" src={logow} alt="Logo White" />
                        <img className="fimg" src={logob} alt="Logo Black" style={{ backgroundColor: COLORS.secondary }} />
                        <img className="fimg" src={logow} alt="Logo White" />
                        <img className="fimg" src={logob} alt="Logo Black" style={{ backgroundColor: COLORS.secondary }} />
                    </div>
                </div>
                <div className="portfolio p-4">
                    <div className="d-flex">
                        <h2>Product Photography</h2>
                    </div>
                    <div className="d-flex client1">
                        <div className="clientleft">
                            <h2>Mask's Kitchen</h2>
                            <span>Marks Kitchen Is The Best Fast-Food Restaurant In Lahore, Bringing You A Variety Of Food  From Around The World.</span>
                        </div>
                        <div className="d-flex clientright">
                            <img src={BBQ} className="imgclient1" />
                            <img src={Chicken} className="imgclient1" />
                            <img src={Fries} className="imgclient1" />
                            <img src={Sticks} className="imgclient1" />
                            <img src={Grilled} className="imgclient1" />
                            <img src={Kentucky} className="imgclient1" />
                            <img src={Smash} className="imgclient1" />
                            <img src={Smokehouse} className="imgclient1" />
                        </div>
                    </div>
                    <hr className='solid hr'></hr>
                    <div className="d-flex client2" >
                        <div className="d-flex clientright">
                            <img src={Smoky} className="imgclient1" />
                            <img src={Fajita} className="imgclient1" />
                            <img src={Mughalai} className="imgclient1" />
                            <img src={SmokyCroissant} className="imgclient1" />
                            <img src={Tikka} className="imgclient1" />
                            <img src={LotusBrownie} className="imgclient1" />
                            <img src={MarksMudBrownie} className="imgclient1" />
                            <img src={MoltenLava} className="imgclient1" />
                        </div>
                        <div className="clientleft">
                            <h2>Garam Chai</h2>
                            <span>Garam Chai Is The Best Fast-Food Restaurant In Lahore, Bringing You A Variety Of Food  From Around The World.</span>
                            <h6 className="pt-4">Photography :- Product Shoot</h6>
                        </div>
                    </div>
                    <hr className='solid hr'></hr>
                    <div className="d-flex client3">
                        <div className="clientleft">
                            <h2>Mask's Kitchen</h2>
                            <span>Marks Kitchen Is The Best Fast-Food Restaurant In Lahore, Bringing You A Variety Of Food  From Around The World.</span>
                            <h6 className="pt-4">Photography :- Product Shoot</h6>
                        </div>
                        <div className="d-flex clientright">
                            <img src={CashewnutChicken} className="imgclient1"/>
                            <img src={StreetStyleChowmein} className="imgclient1" />
                            <img src={SweetAndSour} className="imgclient1" />
                            <img src={FriedRice} className="imgclient1" />
                            <img src={ChickenAlfredoFettuccine} className="imgclient1" />
                            <img src={BakeWhitePasta} className="imgclient1" />
                            <img src={creamymuglaI} className="imgclient1" />
                            <img src={GrilledChickenSandwich} className="imgclient1" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
