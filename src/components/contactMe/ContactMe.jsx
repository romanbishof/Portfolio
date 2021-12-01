import React, { useRef } from 'react';
import "./contactMe.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
const ContactMe = () => {

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

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
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactMe;