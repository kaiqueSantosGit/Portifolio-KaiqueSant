// src/components/Hero.jsx

import styles from "./Hero.module.css";
import ParticlesBackground from "./ParticlesBackground";
import { TypeAnimation } from "react-type-animation"; // 1. Importe o componente

function Hero() {
  const showParticles = true;

  return (
    <section className={styles.hero}>
      {showParticles && <ParticlesBackground />}

      <div className={styles.heroContent}>
        <div className={styles.nameContainer}>
          <p className={styles.introText}>Eu Sou</p>
          <h1 className={styles.name}>Kaique Sant</h1>
        </div>

        {/* 2. SUBSTITUÍMOS O <p> ANTIGO POR ESTE BLOCO */}
        <div className={styles.typeAnimationContainer}>
          {/* <span>Sou: </span> */}
          <TypeAnimation
            sequence={[
              // Mesma frase com pequena pausa no início
              "Frontend Developer",
              2000,
              "Web Designer",
              2000,
              "Desenvolvedor Fullstack em formação",
              3000,
            ]}
            wrapper="span"
            speed={50}
            className={styles.animatedText}
            repeat={Infinity}
          />
        </div>

        <p className={styles.subtitle}>
          Construindo interfaces e experiências digitais modernas e responsivas.
        </p>
        <div className={styles.buttons}>
          <a href="#projetos" className={styles.btnPrimary}>
            Meus Projetos
          </a>
          <a
            href="https://www.linkedin.com/in/kaiquegsantos"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
