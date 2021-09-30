import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <>
            <div className="contact">
                <Navigation />
                <div className="contactContent">
                    <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Lille</span>
                            </li>
                            <li>
                            <i class="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0680146040">
                                    <span className="clickInput" onClick={() => {alert("Téléphone copié")}}>06 80 14 60 40</span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i class="fas fa-at"></i>
                                <CopyToClipboard text="arnaud.fourmault@gmail.com">
                                    <span className="clickInput" onClick={() => {alert("E-mail copié!")}}>arnaud.fourmault@gmail.com</span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                    <div className="socialNetwork">
                        <ul>
                            <a href="https://www.linkedin.com/in/arnaud-fourmault-53837b105/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Arnaudf59" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://twitter.com/Arnaudf59" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-discord"></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;