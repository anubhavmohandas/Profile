import About from "./Components/About/about";
import Intro from "./Components/Intro/intro";
import Project from "./Components/Project/project";
import Testimonial from "./Components/Testimonials/Testimonial"

const App = () => {
  return (
      <div>
        <Intro/>
        <About/>
        <Project/>
        <Testimonial/>
      </div>
    )
};

export default App;