import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../../styles/main.scss"

const bookData = [
  {
    status: "Released",
    bg: "#d5d8fc",
    img: "https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00458.png",
  },
  {
    status: "Released",
    bg: "#f7eafd",
    img: "https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00457.png",
  },
  {
    status: "Released",
    bg: "#daeff2",
    img: "https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00456.png",
  },
  {
    status: "Releasing Soon",
    bg: "#f9f1d5",
    img: "https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00454.png",
  },
  {
    status: "Coming Soon",
    bg: "#adf2d2",
    img: "https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00453.png",
  },
  {
    status: "Coming Soon",
    bg: "#daeff2",
    img: "https://thepixelcurve.com/wp/upstudy/wp-content/uploads/2025/02/UPST00455.png",
  },
];

const Books = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="books-section" data-aos="fade-up">
      <h1 className="books-title">Books</h1>
      <div className="books-panel">
        {bookData.map((book, index) => (
          <div
            key={index}
            className={`books-card ${book.status.replace(" ", "-").toLowerCase()}`}
          >
            <div className="badge">{book.status}</div>
            <div className="circle" style={{ backgroundColor: book.bg }}>
              <img src={book.img} alt={book.status} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;
