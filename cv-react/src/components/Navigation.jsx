import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <>
            <div className="sidebar">
                <div className="id">
                    <div className="idContent">
                        <img src="./media/photo.jpg" alt="Photo de profil" />
                        <h3>Fourmault Arnaud</h3>
                    </div>
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="navActive">
                                <i className="fas fa-home"></i>
                                <span>Acceuil</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/competences" activeClassName="navActive">
                                <i className="fas fa-mountain"></i>
                                <span>Competences</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/portfolio" activeClassName="navActive">
                                <i className="fas fa-images"></i>
                                <span>Portfolio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" activeClassName="navActive">
                                <i className="fas fa-address-book"></i>
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/arnaud-fourmault-53837b105/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/Arnaudf59" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Arnaudf59" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
                        </li>
                    </ul>
                    <div className="signature">
                        <p>Arnaud Fourmault - 2021</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;