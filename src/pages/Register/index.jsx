import { Link } from 'react-router-dom'
import '../../styles/login.scss';

const RegisterPage = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-image">
          <img src="0.svg" alt="Login Visual" />
        </div>

        <div className="login-form">
          <h2>Sign Up</h2>

          <form>
            <div className="input-group">
              <i className="fa fa-user"></i>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <i className="fa-solid fa-envelope" style={{fontSize:"1.1rem"}}></i>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>

            <div className="remember">
              {/* <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label> */}
            </div>

            <button className="login-btn" type="submit">Sign in</button>
          </form>
          <Link to="/login" className="create-account">
            Do you have an Account?
          </Link>

          <div className="social-login">
            <span>Or register with</span>
            <div className="icons">
              <i className="fab fa-google google"></i>
              <i className="fa-solid fa-envelope google"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
