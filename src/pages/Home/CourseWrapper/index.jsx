import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { getAllCards } from "../../../api/request";
import "../../../styles/main.scss";

const CourseWrapper = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchCourses = async () => {
      try {
        const data = await getAllCards(); 
        const catalogs = [...new Set(data.map((card) => card.catalog))];
        setCourses(catalogs);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const trackCourses = [...courses, ...courses]; 

  const handleCourseClick = (catalog) => {
    navigate(`/courses?category=${encodeURIComponent(catalog)}`);
  };

  return (
    <section className="course-section" data-aos="fade-up">
      <h1 className="course-title">Course Catalog</h1>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {trackCourses.map((catalog, index) => (
            <button
              key={index}
              type="button"
              className="course-button"
              onClick={() => navigate(`/courses?category=${catalog}`)}
            >
              {catalog}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseWrapper;
