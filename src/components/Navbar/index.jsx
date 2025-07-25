import { use, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/main.scss';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [isOpen, setIsOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0)

  const token = localStorage.getItem('token');
  const isLoggedIn = !!token


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${!isMobile ? (showNavbar ? 'fixed-navbar' : 'hidden-navbar') : ''}`}>
      {isMobile ? (
        // ===== MOBILE VIEW =====
        <>
          <div className="mobile-navbar">
            <MenuIcon
              sx={{

                backgroundColor: 'transparent',
                '&:hover': { backgroundColor: 'transparent' },
                '&:active': { backgroundColor: 'transparent' },
                '&:focus': { backgroundColor: 'transparent' },
              }}
              className="hamburger" onClick={() => setIsOpen(true)} />
            <div className="center-logo">
              <Link to="/" className="nostyle">
                <div className="logo">EduZ</div>
              </Link>
            </div>
            <Link to="/login" className="nostyle">
              <button className="login-btn">Login</button>
            </Link>
          </div>

          <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
            <CloseIcon className="close-icon" onClick={() => setIsOpen(false)} />
            <ul>
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/achievements" onClick={() => setIsOpen(false)}>Achievements</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
              <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
            </ul>
          </div>
        </>
      ) : (


        // ===== DESKTOP VIEW =====
        <div className="parent-nav-links">
          <Link to="/" className="nostyle">
            <div className="logo">EduZ</div>
          </Link>
          <div className='btn-links'>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            {
              isLoggedIn ? (
                <Link to="/dashboard" className="nostyle">
                  <button className="login-btn">Dashboard</button>
                </Link>
              ) : (
                <Link to="/login" className="nostyle">
                  <button className="login-btn">Login</button>
                </Link>
              )
            }
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
