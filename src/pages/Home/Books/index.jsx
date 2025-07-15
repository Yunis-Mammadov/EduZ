import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Books = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,
        });
    }, []);

    return (
        <>
            <div className="books-section" data-aos="fade-up">
                <h1 className="books-title">Books</h1>
                <div className="books-panel">
                    <div className="books-card released">
                        <div className="badge">Released</div>
                        <div className="circle" style={{ backgroundColor: "#d5d8fc" }}>
                            <img src="https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00458.png" alt="" />
                        </div>
                    </div>

                    <div className="books-card released" style={{ marginTop: "20px" }}>
                        <div className="badge">Released</div>
                        <div className="circle" style={{ backgroundColor: "#f7eafd" }}>
                            <img src="https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00457.png" alt="Sensei" />
                        </div>
                    </div>

                    <div className="books-card released">
                        <div className="badge">Released</div>
                        <div className="circle" style={{ backgroundColor: "#daeff2" }}>
                            <img src="https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00456.png" alt="Sensei" />
                        </div>
                    </div>

                    <div className="books-card released" style={{ marginTop: "20px" }}>
                        <div className="badge">Releasing Soon</div>
                        <div className="circle" style={{ backgroundColor: "#f9f1d5" }}>
                            <img src="https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00454.png" alt="Sensei" />
                        </div>
                    </div>

                    <div className="books-card released">
                        <div className="badge">Coming Soon</div>
                        <div className="circle" style={{ backgroundColor: "#adf2d2" }}>
                            <img src="https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00453.png" alt="Sensei" />
                        </div>
                    </div>

                    <div className="books-card released" style={{ marginTop: "20px" }}>
                        <div className="badge">Coming Soon</div>
                        <div className="circle" style={{ backgroundColor: "#daeff2" }}>
                            <img src="https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00455.png" alt="Sensei" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Books
