import { Link } from 'react-router-dom'
import VideocamIcon from '@mui/icons-material/Videocam';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import "../../styles/main.scss"

const About = () => {

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <>
      <div className='about-wrapper' data-aos='fade-up'>
        <section className="hero">
          <div className="hero__content" style={{ paddingLeft: '0' }}>
            <p className="hero__platform">E-COURSE PLATFORM</p>
            <h1 className="hero__title">A unique approach to learning foreign <br />languages online.</h1>
            <p className="hero__subtitle">
              Gain subject certification or earn money<br />
              while teaching online with GlobalTalk.
            </p>
            <div className="hero__buttons">
              <Link to='/register'>
                <button className='about_btn'>Get Started</button>
              </Link>
            </div>
            <div className="hero__stats">
              <div>
                <span> 700k+</span>
                <p>Hours of Content</p>
              </div>
              <div>
                <span>575k+</span>
                <p>Active Users</p>
              </div>
            </div>
          </div>
          <div className="hero__image">
            <img className='about-img' src="about.png" alt="Boy reading with gamepad" />
          </div>
        </section>

        <div className='about-container'>
          <div style={{ textAlign: 'center' }}>
            <h4>Why Choose Us</h4>
            <h1 className="hero__title" style={{
              fontSize: "2.5rem",
              fontWeight: "500"
            }}>Our Values</h1>
          </div>
          <div className='about-cards'>
            <div className='card-box'>
              <VideocamIcon className='about-icon' />
              <h3>Lesson Videos</h3>
              <p>Our platform offers engaging and structured video lessons that guide you step by step. Learn at your own pace with clear explanations and real-life examples.</p>
            </div>
            <div className='card-box'>
              <HighQualityIcon className='about-icon' />
              <h3>High Quality</h3>
              <p>Enjoy premium learning experience with carefully crafted content and professional visuals. Everything is designed to keep you focused and motivated throughout your journey.</p>
            </div>
            <div className='card-box'>
              <AssignmentTurnedInIcon className='about-icon' />
              <h3>Progress Analysis</h3>
              <p>Track your improvement with smart progress analytics and personal feedback. Visualize your learning milestones and stay on top of your goals.</p>
            </div>
          </div>
        </div>

        <div className='about-trial'>
          <div className='trial-title'>
            <h1>Get a free trial lesson today</h1>
            <p>Enjoy a premium learning experience with carefully crafted content and professional visuals.</p>
          </div>
          <form className='trial-input' onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" required />
            <button className='about_btn' type="submit">Send it</button>
          </form>
        </div>

        {showModal && (
          <div className="modal">
            <p>✅ Your message has been sent to the moon!</p>
          </div>
        )}
      </div>
    </>
  )
}

export default About
