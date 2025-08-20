import Books from "./Books"
import CourseWrapper from "./CourseWrapper"
import Faq from "./Faq"
import Hero from "./Hero"
import Plugins from "./Plugins"
import Zoom from "./Zoom"
import { Helmet } from "react-helmet";


const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <Hero />
        <Books />
        <CourseWrapper />
        <Zoom />
        <Plugins />
        <Faq />
      </div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home Page" />
      </Helmet>
    </>
  )
}

export default Home
