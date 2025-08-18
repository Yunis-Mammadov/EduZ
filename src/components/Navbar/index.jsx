import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/main.scss";
import Profile from '../Profile';

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));


  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/achievements", label: "Achievements" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const AuthButton = () =>
    isLoggedIn ? (
      <Profile onLogout={() => setIsLoggedIn(false)} />
    ) : (
      <Link to="/login" className="nostyle">
        <button className="navbar__btn">Login</button>
      </Link>
    );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 200) {
        setShowNavbar(true);
      } else {
        setShowNavbar(currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    const debounce = (fn, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    };

    const optimizedScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", optimizedScroll);
    return () => window.removeEventListener("scroll", optimizedScroll);
  }, [lastScrollY]);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <nav
      className={`navbar ${!isMobile ? (showNavbar ? "navbar--fixed" : "navbar--hidden") : ""
        }`}
    >
      {isMobile ? (
        <>
          {/* ===== MOBILE VIEW ===== */}
          <div className="navbar__mobile">
            <MenuIcon className="navbar__hamburger" onClick={openSidebar} />

            <div className="navbar__logo">
              <Link to="/" style={{ fontSize: "2rem" }}>
                Coursia
              </Link>
            </div>

            <AuthButton />
          </div>

          <div className={`navbar__sidebar ${isOpen ? "open" : "close"}`}>
            <CloseIcon className="navbar__close" onClick={closeSidebar} />
            <ul>
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} onClick={closeSidebar}>
                    {link.label}
                  </Link>
                </li>
              ))}
              {isLoggedIn && (
                <li>
                  <Link to="/dashboard" onClick={closeSidebar}>
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </>
      ) : (
        <div className="navbar__desktop">
          <div className="navbar__logo">
            <Link to="/">Coursia</Link>
          </div>

          <div className="navbar__links">
            <ul>
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <AuthButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
