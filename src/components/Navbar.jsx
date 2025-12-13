import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none'
        }}>
            <div className="logo">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div style={{ width: '32px', height: '32px' }}><Logo /></div>
                    <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: 'white',
                    }}>RONNA AI</span>
                </Link>
            </div>

            <div className="links" style={{
                display: 'flex',
                gap: '30px'
            }}>
                <Link to="/technology" style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: 'white',
                    letterSpacing: '1px',
                    position: 'relative',
                    textDecoration: 'none'
                }} className="nav-link">
                    Technology
                </Link>

                <Link to="/ourproduct" style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: 'white',
                    letterSpacing: '1px',
                    position: 'relative',
                    textDecoration: 'none'
                }} className="nav-link">
                    Our Product
                </Link>

                <a href={isHome ? "#contact" : "/#contact"} style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: 'white',
                    letterSpacing: '1px',
                    position: 'relative',
                    textDecoration: 'none'
                }} className="nav-link">
                    Contact
                </a>
            </div>

            <div className="mobile-menu" style={{ display: 'none' }}>
                {/* Placeholder for hamburger */}
                <span style={{ color: 'white' }}>☰</span>
            </div>

            <style>{`
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -5px;
          left: 0;
          background-color: white;
          transition: width 0.3s ease;
        }
        .nav-link:hover:after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .links { display: none !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
        </nav>
    );
}
