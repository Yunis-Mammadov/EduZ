import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signUp } from '../../api/request';
import "../../styles/main.scss"
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
        'Password must contain at least 1 uppercase letter, 1 number, 1 special character, minimum 6 characters'
      )
      .required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting, setStatus, resetForm }) => {
    setStatus(null);
    try {
      await signUp(values);
      setStatus({ success: 'Registered successfully!' });
      resetForm();
      setTimeout(() => navigate('/login'), 1000);
    } catch (error) {
      if (error.response) {
        setStatus({ error: error.response.data.message || 'Registration failed.' });
      } else {
        setStatus({ error: 'Network error.' });
      }
    }
    setSubmitting(false);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-image">
            <img src="0.svg" alt="Register Visual" />
          </div>

          <div className="login-form">
            <h2>Sign Up</h2>

            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, status }) => (
                <Form>
                  {['name', 'email', 'password'].map((field) => (
                    <div className="floating-input" key={field}>
                      <Field name={field} type={field === 'password' ? 'password' : 'text'} required />
                      <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                      <ErrorMessage name={field} component="p" className="error-message" />
                    </div>
                  ))}

                  <button className="login-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Registering...' : 'Sign Up'}
                  </button>

                  {status?.success && <p className="success-message">{status.success}</p>}
                  {status?.error && <p className="error-message">{status.error}</p>}
                </Form>
              )}
            </Formik>

            <Link to="/login" className="create-account">
              Already have an account?
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
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register Page" />
      </Helmet >
    </>
  );
};

export default RegisterPage;
