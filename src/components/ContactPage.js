import React, { useState } from "react";
import './ContactPage.css';
import {faSquareWhatsapp, faSquareInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSquarePhoneFlip } from "@fortawesome/free-solid-svg-icons";

function ContactPage() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    return(
        <div className="contactUs">
            <img src="/contact-banner-2.jpg" alt="contact us" title="צור קשר" className="contactLogo"/>
            <div className="contactPageMain">
                <img src="/second-logo-contactPage.jpg" alt="contactPageLogo" title="logo" className="secondLogo" />
                <div className="contactPageForm">
                    <div className="contactFormInputs">
                        <input 
                            type="text"
                            id="fullName"
                            placeholder="שם מלא"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <input 
                            type="text"
                            id="phoneNumber"
                            placeholder="טלפון"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        <input 
                            type="email"
                            id="email"
                            placeholder="מייל"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input 
                            type="text"
                            id="contactPageSubject"
                            placeholder="נושא הפניה"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            className="subject"
                        />
                        <br/>
                        <button type="submit" className="contactPageFormButton">הצטרפו אלינו</button>
                        <div className="contactPageIcons">
                            <a href="https://wa.me/972504066900" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareWhatsapp} size="2xl" style={{color: "#028860",}}/></a>
                            <a href="tel:+97212345678"><FontAwesomeIcon icon={faSquarePhoneFlip} size="2xl" style={{color: "#003694",}}/></a> 
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} size="2xl" style={{color: "#f773c7",}}/></a> 
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#1877F7",}}/></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;