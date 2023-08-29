import React, { useState } from "react";
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
import MK1 from '../image/product/mask/MK1.jpg';
import MK2 from '../image/product/mask/MK2.jpg';
import MK3 from '../image/product/mask/MK3.jpg';
import MK4 from '../image/product/mask/MK4.jpg';
import MK5 from '../image/product/mask/MK5.jpg';
import MK6 from '../image/product/mask/MK6.jpg';
import MK7 from '../image/product/mask/MK7.jpg';
import MK8 from '../image/product/mask/MK8.jpg';
import G1 from '../image/product/GC/G1.jpeg';
import G2 from '../image/product/GC/G2.jpeg';
import G3 from '../image/product/GC/G3.jpeg';
import G4 from '../image/product/GC/G4.jpeg';
import G5 from '../image/product/GC/G5.jpeg';
import G6 from '../image/product/GC/G6.jpeg';
import G7 from '../image/product/GC/G7.jpeg';
import G8 from '../image/product/GC/G8.jpeg';
import MF1 from '../image/product/momin/MF1.jpg';
import MF2 from '../image/product/momin/MF2.jpg';
import MF3 from '../image/product/momin/MF3.jpg';
import MF4 from '../image/product/momin/MF4.jpg';
import MF5 from '../image/product/momin/MF5.jpg';
import MF6 from '../image/product/momin/MF6.jpg';
import MF7 from '../image/product/momin/MF7.jpg';
import MF8 from '../image/product/momin/MF8.jpg';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const Portfolio = () => {
    const images = [
        { src: MK1, title: 'Image 1' },
        { src: MK2, title: 'Image 2' },
        { src: MK3, title: 'Image 3' },
        { src: MK4, title: 'Image 4' },
        { src: MK5, title: 'Image 5' },
        { src: MK6, title: 'Image 6' },
        { src: MK7, title: 'Image 7' },
        { src: MK8, title: 'Image 8' },
        // ...other image objects
    ];
     const openImageInModal = (src) => {
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`<img src="${src}" alt="Image" />`);
    };

    return (
        <>
            <div className="fashion-main p-4" style={{ backgroundColor: COLORS.primary, color: COLORS.yellow }}>
                <div className="fashion">
                    <div className="fash text-center">
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
                    <div className="wed text-center">
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
                    <div className="port text-center">
                        <h2>Product Photography</h2>
                    </div>
                    <div className="d-flex client1 p-4">
                        <div className="clientleft">
                            <h2>Mask's Kitchen</h2>
                            <span>Marks Kitchen Is The Best Fast-Food Restaurant In Lahore, Bringing You A Variety Of Food  From Around The World.</span>
                            <span>
                                <a href="https://markskitchen.com.pk/">
                                    <button type="button" className="btn btn-warning">Marks Kitchen</button>
                                </a>
                            </span>
                        </div>
                        <div className="d-flex clientright">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    className="imgclient1"
                                    alt={image.title}
                                    onClick={() => openImageInModal(image.src)}
                                />
                            ))}
                        </div>
                    </div>
                    <hr className='solid hr'></hr>
                    <div className="d-flex client2 p-4" >
                        <div className="d-flex clientright">
                            <img src={G1} className="imgclient1 " />
                            <img src={G2} className="imgclient1" />
                            <img src={G3} className="imgclient1" />
                            <img src={G4} className="imgclient1" />
                            <img src={G5} className="imgclient1" />
                            <img src={G6} className="imgclient1" />
                            <img src={G7} className="imgclient1" />
                            <img src={G8} className="imgclient1" />

                        </div>
                        <div className="clientleft">
                            <h2>Garam Chai</h2>
                            <span>Garam Chai Is The Best Fast-Food Restaurant In Lahore, Bringing You A Variety Of Food  From Around The World.</span>
                            <span >
                                <a href="https://www.instagram.com/garamchaipk/">
                                    <button type="button" className="btn btn-warning">Garam Chai</button>
                                </a>
                            </span>
                        </div>
                    </div>
                    <hr className='solid hr'></hr>
                    <div className="d-flex client3 p-4">
                        <div className="clientleft">
                            <h2>Golden Dairy</h2>
                            <span>Desi Ghee is also an excellent source of Vitamin E. Studies have shown that Vitamin E has significant antioxidant properties. Antioxidants like Vitamin E have been linked to lowering the risk of cancer, arthritis, and cataracts. Vitamin E can also help reduce the risk of heart disease.</span>
                            <span >
                                <a href="https://mygoldendairy.com/">
                                    <button type="button" className="btn btn-warning">Golden Dairy</button>
                                </a>
                            </span>
                        </div>
                        <div className="d-flex clientright">
                            <img src={MF1} className="imgclient1" />
                            <img src={MF2} className="imgclient1" />
                            <img src={MF3} className="imgclient1" />
                            <img src={MF4} className="imgclient1" />
                            <img src={MF5} className="imgclient1" />
                            <img src={MF6} className="imgclient1" />
                            <img src={MF7} className="imgclient1" />
                            <img src={MF8} className="imgclient1" />

                        </div>
                    </div>
                    <hr className='solid hr'></hr>
                    <div className="d-flex client4 p-4">
                        <div className="d-flex clientright">
                            <img src={MF1} className="imgclient1" />
                            <img src={MF2} className="imgclient1" />
                            <img src={MF3} className="imgclient1" />
                            <img src={MF4} className="imgclient1" />
                            <img src={MF5} className="imgclient1" />
                            <img src={MF6} className="imgclient1" />
                            <img src={MF7} className="imgclient1" />
                            <img src={MF8} className="imgclient1" />
                        </div>
                        <div className="clientleft">
                            <h2>Momin FOOD</h2>
                            <span>We are a proud suppliers of Food Masala flavors and spices. Experience the high-quality of our full range of dry products.</span>
                            <span >
                                <a href="https://mominfoods.com/">
                                    <button type="button" className="btn btn-warning">Momin FOOD</button>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
