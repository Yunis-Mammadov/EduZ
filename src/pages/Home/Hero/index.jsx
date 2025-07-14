import { Link } from 'react-router-dom'
import '../../../styles/main.scss'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <p className="hero__platform">E-COURSE PLATFORM</p>
                <h1 className="hero__title">Learning and teaching online,<br />made easy.</h1>
                <p className="hero__subtitle">
                    Gain subject certification or earn money<br />
                    while teaching online with GlobalTalk.
                </p>
                <div className="hero__buttons">
                    <Link to="/login" className="hero__link">Sign In →</Link>
                    <Link to='/about'>
                        <button className="login-btn">Learn more →</button>
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
                <img src="frame24.svg" alt="Boy reading with gamepad" />
            </div>
        </section>

    )
}

export default Hero
