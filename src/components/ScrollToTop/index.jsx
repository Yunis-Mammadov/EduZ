import { useEffect, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = () => {
    const radius = 26;
    const circumference = 2 * Math.PI * radius;

    const [offset, setOffset] = useState(circumference);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollTop / docHeight;
            const strokeDashoffset = circumference - progress * circumference;
            setOffset(strokeDashoffset);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="scroll-to-top" onClick={scrollToTop}>
            <svg className="progress-ring" width="60" height="60">
                <circle
                    className="progress-ring__circle"
                    stroke="#4dd0e1"
                    strokeWidth="6"
                    fill="transparent"
                    r={radius}
                    cx="30"
                    cy="30"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: offset,
                    }}
                />
            </svg>
            <span className="arrow"><ArrowUpwardIcon /></span>
        </div>
    );
};

export default ScrollToTop;
