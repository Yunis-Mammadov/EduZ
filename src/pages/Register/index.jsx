import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { signUp } from '../../api/request';
import '../../styles/stylePages/login.scss';

const RegisterPage = () => {

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');


    try {
      const res = await signUp(form)
      setMessage('Registered successfully!');
      setForm({ name: '', email: '', password: '' });

      setTimeout(() => {
        navigate('/login');
      }, 1000)
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'Registration failed.');
      } else {
        setMessage('Network error.');
      }
    }
  }



  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-image">
          <img src="0.svg" alt="Login Visual" />
        </div>

        <div className="login-form">
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fa fa-user"></i>
              <input type="text"
                placeholder="Your Name"
                name='name'
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <i className="fa-solid fa-envelope" style={{ fontSize: "1.1rem" }}></i>
              <input
                type="email"
                placeholder="Email"
                name='email'
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name='password'
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="login-btn" type="submit">Sign in</button>

            {message && <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>}


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
