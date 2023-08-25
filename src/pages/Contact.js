import React from "react";
import './Contact.css'
import { COLORS } from '../constants/colors';
import { MdEmail, MdAddCall, MdAccessTime } from "react-icons/md";
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';



const Contact = () => {
    return (

        <>
            <div className="contact" style={{ backgroundColor: COLORS.yellow, color: COLORS.primary }}>
                <div className="d-flex">
                    <h1>
                        Contact Me
                    </h1>
                </div>
                <div className="d-flex pt-5">
                    <div className="data">
                        <div>
                            <h2>
                                Get In Touch With use
                            </h2>
                            <span>For inquiries,complaints or information,you can reach us by email or using the contact address below or call the mobile number.</span>
                        </div>
                        <div className="pt-5">
                            <span className="d-block">
                                <MdEmail size={30}
                                    style={{ backgroundColor: COLORS.secondary, padding: '5px', borderRadius: '25px', }} />
                                <span style={{ paddingLeft: '25px' }}>Email</span>
                                <span className="d-block" style={{ paddingLeft: '55px' }}>wasifarain057@gmail.com</span>
                            </span>
                            <span className="d-block pt-4">
                                <MdAddCall size={30}
                                    style={{ backgroundColor: COLORS.secondary, padding: '5px', borderRadius: '25px' }} />
                                <span style={{ paddingLeft: '25px' }}>Call Us</span>
                                <span className="d-block" style={{ paddingLeft: '55px' }}>0331-6716750</span>
                            </span>
                            <span className="d-block pt-4">
                                <MdAccessTime size={30}
                                    style={{ backgroundColor: COLORS.secondary, padding: '5px', borderRadius: '25px' }} />
                                <span style={{ paddingLeft: '25px' }}>Mon-Sat 09:00-18:00</span>
                                <span className="d-block" style={{ paddingLeft: '55px' }}>Sunday Close</span>
                            </span>
                        </div>
                    </div>
                    <div className='form right'>
                        <form>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                <TextField id="outlined-search" label="Your Name" type="text" />
                                <TextField id="outlined-search" label="Email" type="email" />
                                </div>
                                <div>
                                <TextField id="outlined-search" label="Phone Number" type="number" />
                                <TextField id="outlined-search" label="City" type="text" />
                                </div>
                                <div>
                                <TextField id="outlined-search" label="Youe Message" type="text" />
                                </div>
                            </Box>
                        </form>
                        <div className='btn text-center'
                            style={{ paddingTop: '3rem', display: 'flex', justifyContent: 'center' }}>
                            <button type="button" className="btn btn-dark"
                                style={{ borderRadius: '30px', backgroundColor: COLORS.primary }}>
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Contact;
