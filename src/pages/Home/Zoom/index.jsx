import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../../../styles/main.scss'


const Zoom = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#edf3f0" }}>
        <div className='zoom-section'>
          <div className="zoom-wrapper" > 
            <img src="https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00473.png" alt="" />
            <img src="https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/05/FEE984.jpg" alt="" />
            <img src="http://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00475.jpg" alt="" />
          </div>
          <div className="zoom-title">
            <h1>Zoom Online Meeting Integration</h1>
            <p>Easily connect and manage live classes or virtual meetings directly from your website with Zoom Online Meeting Integration.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Zoom
