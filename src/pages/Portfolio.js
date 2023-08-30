import React, { useState } from "react";
import './Portfolio.css'
import { COLORS } from '../constants/colors';
import { GrFormClose } from 'react-icons/gr';
// Fashion 
import F1 from '../image/fashion/F1.jpg';
import F2 from '../image/fashion/F2.jpg';
import F3 from '../image/fashion/F3.jpg';
import F4 from '../image/fashion/F4.jpg';
// Wedding
import W1 from '../image/wedding/W1.jpg';
import W2 from '../image/wedding/W2.jpg';
import W3 from '../image/wedding/W3.jpg';
import W4 from '../image/wedding/W4.jpg';
import W5 from '../image/wedding/W5.jpg';
import W6 from '../image/wedding/W6.jpg';
import W7 from '../image/wedding/W7.jpg';
import W8 from '../image/wedding/W8.jpg';
// product
// Mask kitchen
import MK1 from '../image/product/mask/MK1.jpg';
import MK2 from '../image/product/mask/MK2.jpg';
import MK3 from '../image/product/mask/MK3.jpg';
import MK4 from '../image/product/mask/MK4.jpg';
import MK5 from '../image/product/mask/MK5.jpg';
import MK6 from '../image/product/mask/MK6.jpg';
import MK7 from '../image/product/mask/MK7.jpg';
import MK8 from '../image/product/mask/MK8.jpg';
// Garam Chai
import G1 from '../image/product/GC/G1.jpeg';
import G2 from '../image/product/GC/G2.jpeg';
import G3 from '../image/product/GC/G3.jpeg';
import G4 from '../image/product/GC/G4.jpeg';
import G5 from '../image/product/GC/G5.jpeg';
import G6 from '../image/product/GC/G6.jpeg';
import G7 from '../image/product/GC/G7.jpeg';
import G8 from '../image/product/GC/G8.jpeg';
// Golden Dairy
import MF1 from '../image/product/GoldenDairy/GD1.jpg';
import MF2 from '../image/product/GoldenDairy/GD2.jpg';
import MF3 from '../image/product/GoldenDairy/GD3.jpg';
import MF4 from '../image/product/GoldenDairy/GD4.jpg';
import MF5 from '../image/product/GoldenDairy/GD5.jpg';
import MF6 from '../image/product/GoldenDairy/GD6.jpg';
import MF7 from '../image/product/GoldenDairy/GD7.jpg';
import MF8 from '../image/product/GoldenDairy/GD8.jpg';
// Momin FOOD

const Portfolio = () => {
    const Fashion = [
        { src: F1, title: 'Image 1' },
        { src: F2, title: 'Image 2' },
        { src: F3, title: 'Image 3' },
        { src: F4, title: 'Image 4' },
        { src: F4, title: 'Image 5' },
        { src: F3, title: 'Image 6' },
        { src: F2, title: 'Image 7' },
        { src: F1, title: 'Image 8' },
    ]
    const Wedding = [
        { src: W1, title: 'Image 1' },
        { src: W2, title: 'Image 5' },
        { src: W3, title: 'Image 3' },
        { src: W4, title: 'Image 4' },
        { src: W5, title: 'Image 5' },
        { src: W6, title: 'Image 6' },
        { src: W7, title: 'Image 7' },
        { src: W8, title: 'Image 8' },
    ]
    const images1 = [
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
    const images2 = [
        { src: G1, title: 'Image 1' },
        { src: G2, title: 'Image 2' },
        { src: G3, title: 'Image 3' },
        { src: G4, title: 'Image 4' },
        { src: G5, title: 'Image 5' },
        { src: G6, title: 'Image 6' },
        { src: G7, title: 'Image 7' },
        { src: G8, title: 'Image 8' },
    ];
    const images3 = [
        { src: MF1, title: 'Image 1' },
        { src: MF2, title: 'Image 2' },
        { src: MF3, title: 'Image 3' },
        { src: MF4, title: 'Image 4' },
        { src: MF5, title: 'Image 5' },
        { src: MF6, title: 'Image 6' },
        { src: MF7, title: 'Image 7' },
        { src: MF8, title: 'Image 8' },
    ];
    const image4 = [
        { src: MF1, title: 'Image 1' },
        { src: MF2, title: 'Image 2' },
        { src: MF3, title: 'Image 3' },
        { src: MF4, title: 'Image 4' },
        { src: MF5, title: 'Image 5' },
        { src: MF6, title: 'Image 6' },
        { src: MF7, title: 'Image 7' },
        { src: MF8, title: 'Image 8' },
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (src) => {
        setSelectedImage(src);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };
    return (
        <>
            <div className="fashion-main p-4" style={{ backgroundColor: COLORS.primary, color: COLORS.yellow }}>
                <div className="fashion">
                    <div className="fash text-center">
                        <h2>FASHION SHOTS</h2>
                    </div>
                    <div className="image-container  pt-4">
                        {Fashion.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                className="fimg"
                                alt={image.title}
                                onClick={() => openImageModal(image.src)}
                            />
                        ))}

                        {selectedImage && (
                            <div className="image-modal-overlay">
                                <div className="image-modal">
                                    <button onClick={closeImageModal} className="close-button">
                                        <GrFormClose size={30} />
                                    </button>
                                    <img src={selectedImage} alt="Selected" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <hr className='solid hr'></hr>
                <div className="wedding p-4">
                    <div className="wed text-center">
                        <h2>WEDDING PHOTO</h2>
                    </div>
                    <div className="image-container  pt-4">
                        {Wedding.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                className="fimg"
                                alt={image.title}
                                onClick={() => openImageModal(image.src)}
                            />
                        ))}

                        {selectedImage && (
                            <div className="image-modal-overlay">
                                <div className="image-modal">
                                    <button onClick={closeImageModal} className="close-button">
                                        <GrFormClose size={30} />
                                    </button>
                                    <img src={selectedImage} alt="Selected" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <hr className='solid hr'></hr>
                <div className="portfolio p-4">
                    <div className="port text-center">
                        <h2>Product Photography</h2>
                    </div>
                    <div className="d-flex client1 p-4">
                        <div className="clientleft ">
                            <h2>Mask's Kitchen</h2>
                            <span>Marks Kitchen Is The Best Fast-Food Restaurant In Lahore, Bringing You A Variety Of Food  From Around The World.</span>
                            <div className="pt-4">
                                <a href="https://markskitchen.com.pk/">
                                    <button type="button" className="btn btn-warning">Marks Kitchen</button>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex clientright">
                            {images1.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    className="imgclient1"
                                    alt={image.title}
                                    onClick={() => openImageModal(image.src)}
                                />
                            ))}

                            {selectedImage && (
                                <div className="image-modal-overlay">
                                    <div className="image-modal">
                                        <button onClick={closeImageModal}
                                            className="close-button"
                                        >
                                            <GrFormClose size={30} />
                                        </button>
                                        <img src={selectedImage} alt="Selected" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <hr className='solid hr'></hr>
                    <div className="d-flex client2 p-4" >
                        <div className="d-flex clientright">
                            {images2.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    className="imgclient1"
                                    alt={image.title}
                                    onClick={() => openImageModal(image.src)}
                                />
                            ))}

                            {selectedImage && (
                                <div className="image-modal-overlay">
                                    <div className="image-modal">
                                        <button onClick={closeImageModal} className="close-button">
                                            <GrFormClose size={30} />
                                        </button>
                                        <img src={selectedImage} alt="Selected" />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="clientleft">
                            <h2>Garam Chai</h2>
                            <span>Garam Chai Is The Best Fast-Food Restaurant In Lahore, Bringing You A Variety Of Food  From Around The World.</span>
                            <div className="pt-4">
                                <a href="https://www.instagram.com/garamchaipk/">
                                    <button type="button" className="btn btn-warning">Garam Chai</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className='solid hr'></hr>
                    <div className="d-flex client3 p-4">
                        <div className="clientleft">
                            <h2>Golden Dairy</h2>
                            <span>Desi Ghee is also an excellent source of Vitamin E. Studies have shown that Vitamin E has significant antioxidant properties. Antioxidants like Vitamin E have been linked to lowering the risk of cancer, arthritis, and cataracts. Vitamin E can also help reduce the risk of heart disease.</span>
                            <div className="pt-4">
                                <a href="https://mygoldendairy.com/">
                                    <button type="button" className="btn btn-warning">Golden Dairy</button>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex clientright">
                            {images3.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    className="imgclient1"
                                    alt={image.title}
                                    onClick={() => openImageModal(image.src)}
                                />
                            ))}

                            {selectedImage && (
                                <div className="image-modal-overlay">
                                    <div className="image-modal">
                                        <button onClick={closeImageModal} className="close-button">
                                            <GrFormClose size={30} />
                                        </button>
                                        <img src={selectedImage} alt="Selected" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <hr className='solid hr'></hr>
                    <div className="d-flex client4 p-4">
                        <div className="d-flex clientright">
                            {image4.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    className="imgclient1"
                                    alt={image.title}
                                    onClick={() => openImageModal(image.src)}
                                />
                            ))}

                            {selectedImage && (
                                <div className="image-modal-overlay">
                                    <div className="image-modal">
                                        <button onClick={closeImageModal} className="close-button">
                                            <GrFormClose size={30} />
                                        </button>
                                        <img src={selectedImage} alt="Selected" />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="clientleft">
                            <h2>Momin FOOD</h2>
                            <span>We are a proud suppliers of Food Masala flavors and spices. Experience the high-quality of our full range of dry products.</span>
                            <div className="pt-4">
                                <a href="https://mominfoods.com/">
                                    <button type="button" className="btn btn-warning">Momin FOOD</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
