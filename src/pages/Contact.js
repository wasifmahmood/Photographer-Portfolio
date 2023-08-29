import React, { useState } from "react";
import './Contact.css'
import { COLORS } from '../constants/colors';
import { MdEmail, MdAddCall, MdAccessTime } from "react-icons/md";
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';



const Contact = () => {
    const [userData, setUserData] = useState({
        YourName: '',
        Email: '',
        PhoneNumber: '',
        City: '',
        Message: '',
    });
    let name, value;
    const postuserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({ ...userData, [name]: value });
    };
    // connect with firebase
    const SendMessage = async (e) => {
        e.preventDefault();
        // const { YourName,Email, PhoneNumber,City, Message } = userData;
        if (
            userData.YourName.trim() === '' ||
            userData.Email.trim() === '' ||
            userData.PhoneNumber.trim() === '' ||
            userData.City.trim() === '' ||
            userData.Message.trim() === ''
        ) {
            alert('Please fill all the fields before submitting.');
            return;
        }
        const res = await fetch('https://tamoor-47bff-default-rtdb.firebaseio.com/userDataStore.json', {
            method: 'POST',
            headers: {
                'Content-Tpye': 'application/json',
            },
            body: JSON.stringify({
                YourName: userData.YourName,
                Email: userData.Email,
                PhoneNumber: userData.PhoneNumber,
                City: userData.City,
                Message: userData.Message,
            })
        }
        );
        if (res) {
            setUserData({ YourName: '', PhoneNumber: '', Email: '', City: '', Message: '', })
            alert('Send Message');
        }
    };
    return (

        <>
            <div className="contact" style={{ backgroundColor: COLORS.yellow, color: COLORS.primary }}>
                <div className="cont text-center">
                    <h1>
                        Contact Me
                    </h1>
                </div>
                <div className="d-flex pt-5">
                    <div className="data">
                        <div>
                            <h2>Get In Touch With use</h2>
                            <span>For inquiries,complaints or information,you can reach us by email or using the contact address below or call the mobile number.</span>
                        </div>
                        <div className="pt-5">
                            <span className="d-block">
                                <MdEmail size={30}
                                    style={{ backgroundColor: COLORS.secondary, padding: '5px', borderRadius: '25px', }} />
                                    <span style={{ paddingLeft: '2rem',fontWeight: 'bold' }}>laboosstudio@gmail.com</span>
                            </span>
                            <span className="d-block pt-4">
                                <MdAddCall size={30}
                                    style={{ backgroundColor: COLORS.secondary, padding: '5px', borderRadius: '25px' }} />
                                    <span style={{ paddingLeft: '2rem',fontWeight: 'bold' }}>+92331-6716750</span>
                            </span>
                            <span className="d-block pt-4">
                                <MdAccessTime size={30}
                                    style={{ backgroundColor: COLORS.secondary, padding: '5px', borderRadius: '25px' }} />
                                <span style={{ paddingLeft: '2rem' }}>Mon-Sat 09:00-18:00 </span>
                                <span style={{ paddingLeft: '', fontWeight: 'bold' }}>( Sunday Close )</span>
                            </span>
                        </div>
                    </div>
                    <div className='form right text-center'>
                        <form>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        id="Name"
                                        name='YourName'
                                        label="Your Name"
                                        type="text"
                                        value={userData.YourName}
                                        onChange={postuserData}
                                    />
                                    <TextField
                                        id="Email"
                                        name='Email'
                                        label="Email"
                                        type="email"
                                        value={userData.Email}
                                        onChange={postuserData}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="PhoneNumber"
                                        name='PhoneNumber'
                                        label="Phone Number"
                                        type="number"
                                        value={userData.PhoneNumber}
                                        onChange={postuserData}
                                    />
                                    <TextField
                                        id="City"
                                        name='City'
                                        label="City"
                                        type="text"
                                        value={userData.City}
                                        onChange={postuserData}
                                    />
                                </div>
                            </Box>
                            <Box
                                sx={{
                                    width: 575,
                                    maxWidth: '100%',
                                    paddingLeft: '2.5rem',
                                    m: 1,
                                }}
                            >
                                <TextField
                                    fullWidth
                                    id="Message"
                                    name='Message'
                                    label="Your Message"
                                    type="text"
                                    value={userData.Message}
                                    onChange={postuserData}
                                />
                            </Box>
                        </form>
                        <div className='btn text-center'
                            style={{ paddingTop: '3rem', display: 'flex', justifyContent: 'center' }}>
                            <button type="button" className="btn btn-dark"
                                style={{ borderRadius: '30px', backgroundColor: COLORS.primary }}
                                onClick={SendMessage}
                            >
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
