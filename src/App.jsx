import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Error from "./Components/Error";

function App() {
  return (
    <Error>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>

      <Footer />
    </Error>
  );
  
}

export default App;
