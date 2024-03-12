import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Project from "./Project";
import Footer from "./Footer";
import Hero from "./Hero";
const Home = () => {
  return (
    <div className="bg-white" id="home">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
