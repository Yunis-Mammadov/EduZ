import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../../../styles/main.scss'


function Plugins() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className='plugins-section'>
        <h1 data-aos="fade-up">Compatible with popular plugins</h1>
        <div className='plugins-grid'>
          <div className='plugins-card'>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752827917/UPST00491_m0vco4.jpg" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img style={{ backgroundColor: "#720eec" }} src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752827955/WOO874_ycbmhh.png" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752827973/BUDDY08_yapaly.png" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828004/UPST00489_pm0obz.jpg" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828024/4_rqsnsq.jpg" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828042/FUL0874_jo3ywj.png" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828062/12_lsptd6.jpg" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828126/C7543_zbcgb8.png" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828132/2_zradop.jpg" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828135/10_sk1mir.jpg" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828179/3_u5vemk.jpg" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828192/6_das8vr.jpg" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828214/9_bk3pdj.jpg" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828224/8_kxmbk7.jpg" alt="" />
            </div>
            <div className='plugin-img' data-aos="fade-right">
              <img src="https://res.cloudinary.com/di1kb9j89/image/upload/v1752828242/7_dvvtwa.jpg" alt="" />
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default Plugins;
