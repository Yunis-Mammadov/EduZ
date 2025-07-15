import Books from "./Books"
import CourseWrapper from "./CourseWrapper"
import Hero from "./Hero"
import Zoom from "./Zoom"

const Home = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Hero />
      <Books />
      <CourseWrapper />
      <Zoom />
    </div>
  )
}

export default Home
