// src/components/About.jsx (versão final com mais animações)

import styles from "./About.module.css";
import minhaFoto from "../assets/foto-perfil.jpg";

function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.aboutContent}>
        {/* Animação da imagem vindo da direita */}
        <div className={styles.imageContainer} data-aos="fade-right">
          <img
            src={minhaFoto}
            alt="Foto de Kaique Sant"
            className={styles.profileImage}
          />
        </div>

        {/* Animação do container de texto vindo da esquerda */}
        <div className={styles.textContainer} data-aos="fade-left">
          {/* Animação do título vindo de cima */}
          <h2 data-aos="fade-down">Sobre Mim</h2>
          <p>
            Olá! Sou Kaique Sant, um desenvolvedor frontend apaixonado por
            criar...
          </p>
          <p>Tenho experiência com tecnologias modernas como React...</p>
        </div>
      </div>
    </section>
  );
}

export default About;
