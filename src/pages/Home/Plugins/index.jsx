import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../../styles/main.scss";

function Plugins() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const pluginImages = [
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752827917/UPST00491_m0vco4.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828224/8_kxmbk7.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752827973/BUDDY08_yapaly.png",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828004/UPST00489_pm0obz.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828024/4_rqsnsq.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828042/FUL0874_jo3ywj.png",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828062/12_lsptd6.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828126/C7543_zbcgb8.png",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828132/2_zradop.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828135/10_sk1mir.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828179/3_u5vemk.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828192/6_das8vr.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828214/9_bk3pdj.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828224/8_kxmbk7.jpg",
    "https://res.cloudinary.com/di1kb9j89/image/upload/v1752828242/7_dvvtwa.jpg"
  ];

  return (
    <section className="plugins-section">
      <h1 data-aos="fade-up">Compatible with popular plugins</h1>
      <div className="plugins-grid">
        <div className="plugins-card">
          {pluginImages.map((src, index) => (
            <div className="plugin-img" key={index} data-aos="fade-right">
              <img src={src} alt={`Plugin ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plugins;
