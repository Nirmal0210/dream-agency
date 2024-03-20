import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const Header = () => {
    const [activeLink, setActiveLink] = useState("");
    const location = useLocation();
    useEffect(() => {
        if (location.hash === "") {
            setActiveLink("#home")
        }
    }, [location.hash])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold purple" onClick={() => setActiveLink("#home")} href="#home">Dream Agency</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={() => setActiveLink("#home")}>
                            <a className={`nav-link ${activeLink === "#home" && 'active'}`} href="#home">Home</a>
                        </li>
                        <li className="nav-item" onClick={() => setActiveLink("#aboutus")}>
                            <a className={`nav-link ${activeLink === "#aboutus" && 'active'}`} href="#aboutus">About Us</a>
                        </li>
                        <li className="nav-item" onClick={() => setActiveLink("#services")}>
                            <a className={`nav-link ${activeLink === "#services" && 'active'}`} href="#services">Services</a>
                        </li>
                        <li className="nav-item" onClick={() => setActiveLink("#contactus")}>
                            <a className={`nav-link ${activeLink === "#contactus" && 'active'}`} href="#contactus">Contact Us</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <i className='bi bi-facebook'></i>
                        <i className='bi bi-linkedin'></i>
                        <i className='bi bi-instagram'></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header