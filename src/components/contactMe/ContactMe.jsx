import React, { useContext, useRef, useState } from 'react';
import "./contactMe.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../contex';

const ContactMe = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_r5pqwus', 'template_atpg3x1', formRef.current, 'user_R4CijAb7sKw0L7d6zKFgd')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }
    
    return (
        <div className="contactMe">
            <div className="contactMe-bg"></div>
            <div className="contactMe-wrapper">
                <div className="contactMe-left">
                    <h1 className="contactMe-title">Contact me</h1>
                    <div className="contactMe-info">
                        <div className="contactMe-info-item">
                            <img src={Phone} 
                            alt="" 
                            className="contactMe-icon"/>
                            (+972) 052 615 23 22
                        </div>
                        <div className="contactMe-info-item">
                            <img src={Email} 
                            alt="" 
                            className="contactMe-icon"/>
                            romanbishof@gmail.com
                        </div>
                        <div className="contactMe-info-item">
                            <img src={Address} 
                            alt="" 
                            className="contactMe-icon"/>
                            Israel
                        </div>
                    </div>
                </div>
                <div className="contactMe-right">
                    <p className="contactMe-desc">
                        <b>Want to hire me? </b> 
                        Send me email and let's chat, or contact me directly.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>
                        {done && "thank you..."}
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactMe;