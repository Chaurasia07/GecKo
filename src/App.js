import { Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Blog from "./Blog";
import Testimonial from "./Testimonial";
import Services from "./Services";
import About from "./About";
import Ourprocess from "./Ourprocess";
import Section from "./Section";

function App() {
  return (
    <>
      <Header />

      <Section />

      <Services />

      <About />

      <Ourprocess />

      <Testimonial />

      <Blog />

      <Contact />
      
      <Footer />
    </>
  );
}

export default App;
