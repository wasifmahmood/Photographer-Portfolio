import React from "react";
import './Portfolio.css'
import { COLORS } from '../constants/colors';
import F1 from '../image/fashion/F1.jpg';
import F2 from '../image/fashion/F2.jpg';
import F3 from '../image/fashion/F3.jpg';
import F4 from '../image/fashion/F4.jpg';
import W1 from '../image/wedding/W1.jpg';
import W2 from '../image/wedding/W2.jpg';
import W3 from '../image/wedding/W3.jpg';
import W4 from '../image/wedding/W4.jpg';
import W5 from '../image/wedding/W5.jpg';
import W6 from '../image/wedding/W6.jpg';
import W7 from '../image/wedding/W7.jpg';
import W8 from '../image/wedding/W8.jpg';
import BBQ from '../image/product/BBQ.png';
import Chicken from '../image/product/Chicken.png';
import Fries from '../image/product/Fries.png';
import Sticks from '../image/product/Sticks.png';
import Grilled from '../image/product/Grilled.png';
import Kentucky from '../image/product/Kentucky.png';
import Smash from '../image/product/Smash.png';
import Smokehouse from '../image/product/Smokehouse.png';
import Smoky from '../image/product/Smoky.png';
import Fajita from '../image/product/Fajita.png';
import Mughalai from '../image/product/Mughalai.png';
import SmokyCroissant from '../image/product/SmokyCroissant.png';
import Tikka from '../image/product/Tikka.png';
import LotusBrownie from '../image/product/LotusBrownie.png';
import MarksMudBrownie from '../image/product/MarksMudBrownie.png';
import MoltenLava from '../image/product/MoltenLava.png';
import GarlicMayoFries from '../image/product/GarlicMayoFries.png';
import sambualsauce from '../image/product/sambualsauce.png';
import SweetAndSour from '../image/product/SweetAndSour.png';
import ChocolateShake from '../image/product/ChocolateShake.png';
import ChickenAlfredoFettuccine from '../image/product/ChickenAlfredoFettuccine.png';
import BakeWhitePasta from '../image/product/BakeWhitePasta.png';
import creamymuglaI from '../image/product/creamymuglaI.png';
import GrilledChickenSandwich from '../image/product/GrilledChickenSandwich.png';


const Portfolio = () => {
    
    return (
        <>
            <div className="fashion-main p-4" style={{ backgroundColor: COLORS.primary, color: COLORS.yellow }}>
                <div className="fashion">
                    <div className="d-flex">
                        <h2>FASHION SHOTS</h2>
                    </div>
                    <div className="image-container  pt-4">
                        <img className="fimg" src={F1} alt="Logo White" />
                        <img className="fimg" src={F2} alt="Logo Black" />
                        <img className="fimg" src={F3} alt="Logo White" />
                        <img className="fimg" src={F4} alt="Logo Black" />
                        <img className="fimg" src={F4} alt="Logo Black" />
                        <img className="fimg" src={F3} alt="Logo White" />
                        <img className="fimg" src={F2} alt="Logo Black" />
                        <img className="fimg" src={F1} alt="Logo White" />
                    </div>
                </div>
                <hr className='solid hr'></hr>
                <div className="wedding p-4">
                    <div className="d-flex">
                        <h2>WEDDING PHOTO</h2>
                    </div>
                    <div className="image-container  pt-4">
                        <img className="fimg" src={W1} alt="Logo White" />
                        <img className="fimg" src={W2} alt="Logo Black" />
                        <img className="fimg" src={W3} alt="Logo White" />
                        <img className="fimg" src={W4} alt="Logo Black" />
                        <img className="fimg" src={W5} alt="Logo Black" />
                        <img className="fimg" src={W6} alt="Logo Black" />
                        <img className="fimg" src={W7} alt="Logo Black" />
                        <img className="fimg" src={W8} alt="Logo Black" />
                    </div>
                </div>
                <hr className='solid hr'></hr>
                <div className="portfolio p-4">
                    <div className="d-flex">
                        <h2>Product Photography</h2>
                    </div>
                    <div className="d-flex client1 p-4">
                        <div className="clientleft">
                            <h2>Mask's Kitchen</h2>
                            <span>Marks Kitchen Is The Best Fast-Food Restaurant In Lahore, Bringing You A Variety Of Food  From Around The World.</span>
                        </div>
                        <div className="d-flex clientright">
                            <img src={Grilled} className="imgclient1" />
                            <img src={BBQ} className="imgclient1" />
                            <img src={Kentucky} className="imgclient1" />
                            <img src={Chicken} className="imgclient1" />
                            <img src={Fries} className="imgclient1" />
                            <img src={Smash} className="imgclient1" />
                            <img src={Sticks} className="imgclient1" />
                            <img src={Smokehouse} className="imgclient1" />
                        </div>
                    </div>
                    <hr className='solid hr'></hr>
                    <div className="d-flex client2 p-4" >
                        <div className="d-flex clientright">
                            <img src={Smoky} className="imgclient1" />
                            <img src={Fajita} className="imgclient1" />
                            <img src={MoltenLava} className="imgclient1" />
                            <img src={SmokyCroissant} className="imgclient1" />
                            <img src={Tikka} className="imgclient1" />
                            <img src={LotusBrownie} className="imgclient1" />
                            <img src={Mughalai} className="imgclient1" />
                            <img src={MarksMudBrownie} className="imgclient1" />

                        </div>
                        <div className="clientleft">
                            <h2>Garam Chai</h2>
                            <span>Garam Chai Is The Best Fast-Food Restaurant In Lahore, Bringing You A Variety Of Food  From Around The World.</span>
                        </div>
                    </div>
                    <hr className='solid hr'></hr>
                    <div className="d-flex client3 p-4">
                        <div className="clientleft">
                            <h2>Momin Foods</h2>
                            <span>Bringing a contemporary yet traditional food culture to your dinning experience.</span>
                        </div>
                        <div className="d-flex clientright">
                            <img src={ChickenAlfredoFettuccine} className="imgclient1" />
                            <img src={SweetAndSour} className="imgclient1" />
                            <img src={creamymuglaI} className="imgclient1" />
                            <img src={GrilledChickenSandwich} className="imgclient1" />
                            <img src={GarlicMayoFries} className="imgclient1" />
                            <img src={BakeWhitePasta} className="imgclient1" />
                            <img src={sambualsauce} className="imgclient1" />
                            <img src={ChocolateShake} className="imgclient1" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
