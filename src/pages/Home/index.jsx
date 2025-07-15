import Books from "./Books"
import CourseWrapper from "./CourseWrapper"
import Hero from "./Hero"

const Home = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Hero />
      <Books />
      <CourseWrapper />
    </div>
  )
}

export default Home
