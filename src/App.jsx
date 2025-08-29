// src/App.jsx

import { useEffect } from "react"; // 1. Importe o useEffect do React
import AOS from "aos"; // 2. Importe a biblioteca AOS
import "aos/dist/aos.css"; // 3. Importe o CSS da biblioteca

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx"; // 1. Importe o About
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // 4. Use o useEffect para inicializar o AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: false, // Se a animação deve acontecer Sempre que aparecer a sessão sobre na tela
    });
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
