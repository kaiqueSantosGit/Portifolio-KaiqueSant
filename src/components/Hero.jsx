// src/components/Hero.jsx

import styles from "./Hero.module.css";
import ParticlesBackground from "./ParticlesBackground";

function Hero() {
  return (
    <section className={styles.hero}>
      {/* <ParticlesBackground /> */}
      <div className={styles.heroContent}>
        <h1 className={styles.name}>Kaique Sant</h1>
        <p className={styles.title}>Desenvolvedor Frontend</p>
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
