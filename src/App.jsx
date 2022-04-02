import { useContext } from "react";
import About from "./Components/About/about";
import Intro from "./Components/Intro/intro";
import Work from "./Components/work/Work";
import Contact from "./Components/Contact/Contact";
import Toggle from "./Components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div style = {{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white" }}>
        <Toggle />
        <Intro/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    )
};

export default App;