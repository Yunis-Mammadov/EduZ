import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../../../styles/main.scss'

const CourseWrapper = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const cources = [
        "Web Development",
        "Data Science",
        "UI/UX Design",
        "Cybersecurity",
        "Marketing",
        "Python",
        "Machine Learning",
        "Buisness",
        "Cloud Marketing"
    ]


    return (
        <div className="course-section" data-aos="fade-up">
            <h1 className="course-title">Course Catalog</h1>
            <div className="marquee-wrapper">
                <div className="marquee-track">
                    {cources.map((course, index) => (
                        <button key={index} className="course-button">
                            {course}
                        </button>
                    ))}
                    {cources.map((course, index) => (
                        <button key={index} className="course-button">
                            {course}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseWrapper
