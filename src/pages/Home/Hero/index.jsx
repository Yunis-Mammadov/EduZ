import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/main.scss";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero__content" data-aos="fade-up">
        <p className="hero__platform">E-COURSE PLATFORM</p>

        <h1 className="hero__title">
          Learning and teaching online, made easy.
        </h1>

        <p className="hero__subtitle">
          Gain subject certification or earn money <br />
          while teaching online with <span className="hero__brand">GlobalTalk</span>.
        </p>

        <div className="hero__buttons">
          <Link to="/login" className="hero__link">
            Sign In →
          </Link>
          <Link to="/about">
            <button className="btn btn--primary">Learn more →</button>
          </Link>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span>700k+</span>
            <p>Hours of Content</p>
          </div>
          <div className="hero__stat">
            <span>575k+</span>
            <p>Active Users</p>
          </div>
        </div>
      </div>

      <div className="hero__image">
        <img src="frame24.svg" alt="Boy reading with gamepad" />
      </div>
    </section>
  );
};

export default Hero;
