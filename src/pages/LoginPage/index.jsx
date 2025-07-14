import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../api/request';
import '../../styles/stylePages/login.scss';

const LoginPage = () => {

  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await signIn(form);
      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setMessage('Daxil oldun!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-image">
          <img src="image33.svg" alt="Login Visual" />
        </div>

        <div className="login-form">
          <h2>Sign In</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button className="login-btn" type="submit">Log in</button>
            {message && <p>{message}</p>}
          </form>
          <Link to="/register" className="create-account">
            Create an account
          </Link>

          <div className="social-login">
            <span>Or login with</span>
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

export default LoginPage;
