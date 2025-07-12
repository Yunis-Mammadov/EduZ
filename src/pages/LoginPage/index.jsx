import { Link } from 'react-router-dom'
import '../../styles/login.scss';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-image">
          <img src="image33.svg" alt="Login Visual" />
        </div>

        <div className="login-form">
          <h2>Sign up</h2>

          <form>
            <div className="input-group">
              <i className="fa fa-user"></i>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>

            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button className="login-btn" type="submit">Log in</button>
          </form>
          <Link to="/register" className="create-account">
            Create an account
          </Link>

          <div className="social-login">
            <span>Or login with</span>
            <div className="icons">
              <i className="fab fa-google google"></i>
              <i class="fa-solid fa-envelope google"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
