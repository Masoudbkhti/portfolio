import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Banner from "./components/Banner.jsx";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
