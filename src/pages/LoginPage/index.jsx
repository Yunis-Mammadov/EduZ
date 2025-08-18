import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signIn } from '../../api/request';
import '../../styles/main.scss';

const LoginPage = () => {
  const navigate = useNavigate();

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password too short').required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    setStatus({});
    try {
      const res = await signIn(values);
      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setStatus({ success: 'Daxil oldun!' });
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setStatus({ error: err.response?.data?.message || 'Login failed.' });
    } finally {
      setSubmitting(false);
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

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, status }) => (
              <Form>
                {['email', 'password'].map((field) => (
                  <div className="floating-input" key={field}>
                    <Field
                      type={field === 'password' ? 'password' : 'text'}
                      name={field}
                      required
                    />
                    <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    <ErrorMessage name={field} component="p" className="error-message" />
                  </div>
                ))}

                <div className="remember">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>

                <button className="login-btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Loading...' : 'Log in'}
                </button>

                {status?.success && <p className="success-message">{status.success}</p>}
                {status?.error && <p className="error-message">{status.error}</p>}
              </Form>
            )}
          </Formik>

          <Link to="/register" className="create-account">
            Create an account
          </Link>

          <div className="social-login">
            <span>Or login with</span>
            <div className="icons">
              <i className="fab fa-google google"></i>
              <i className="fa-solid fa-envelope gmail"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
