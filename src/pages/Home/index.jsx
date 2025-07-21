import Books from "./Books"
import CourseWrapper from "./CourseWrapper"
import Faq from "./Faq"
import Hero from "./Hero"
import Plugins from "./Plugins"
import Zoom from "./Zoom"

const Home = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Hero />
      <Books />
      <CourseWrapper />
      <Zoom />
      <Plugins />
      <Faq />
    </div>
  )
}

export default Home
