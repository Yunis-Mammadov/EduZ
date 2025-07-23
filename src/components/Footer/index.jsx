import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-title">
        <h1>Click here to explore similar projects.</h1>
        <Link target="_blank" to={'https://github.com/Yunis-Mammadov'}>
          <button className="login-btn">Visit Now</button>
        </Link>
      </div>
      <div>
        <p className="footer-text">© Copyright 2025 | Developed By Yunis Mammadov.</p>
      </div>
    </div>
  )
}

export default Footer