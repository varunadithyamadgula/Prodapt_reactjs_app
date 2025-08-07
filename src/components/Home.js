import React, { useState } from 'react';
import logo from '../logo2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const [hovered, setHovered] = useState(null);

    const navLinks = [
        { name: 'Dashboard', href: '/Dashboard' },
        { name: 'Gallery', href: '/Gallery' },
        { name: 'Login', href: '/Login' },
        { name: 'Sign Up', href: '/SignUp' },
        { name: 'Contact Us', href: '/Contactus' },
    ];
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img
                            src={logo}
                            alt="Logo"
                            width="48"
                            height="35"
                            className="d-inline-block align-top me-2"
                        />
                        <span style={{ fontSize: '24px', fontStyle: 'italic', fontWeight: 'bold' }}>Play Sportify</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {navLinks.map((link, idx) => (
                                <li className="nav-item ms-3 me-3" key={link.name}>
                                    <a
                                        className={`nav-link${hovered === idx ? ' active' : ''}`}
                                        href={link.href}
                                        style={{
                                            backgroundColor: hovered === idx ? 'grey' : 'transparent',
                                            color: hovered === idx ? '#fff' : '',
                                            fontSize: '20px',
                                            padding: '8px 16px',
                                            border: hovered === idx ? '1px solid #222' : 'none',
                                            borderRadius: '4px',
                                            transition: 'background 0.2s, color 0.2s',
                                            boxShadow: hovered === idx ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                                        }}
                                        onMouseEnter={() => setHovered(idx)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Home;