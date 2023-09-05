import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Links from "./Components/Links";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Links/>

    </div>
  );
}

export default App;
