// src/components/Skills.jsx

import styles from "./Skills.module.css";
// Importando os ícones que vamos usar
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiVite } from "react-icons/si"; // Exemplo de outro pacote de ícones

function Skills() {
  return (
    <section className={styles.skills}>
      <h2>Habilidades</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skillItem}>
          <FaHtml5 size={60} />
          <p>HTML5</p>
        </div>
        <div className={styles.skillItem}>
          <FaCss3Alt size={60} />
          <p>CSS3</p>
        </div>
        <div className={styles.skillItem}>
          <FaJsSquare size={60} />
          <p>JavaScript</p>
        </div>
        <div className={styles.skillItem}>
          <FaReact size={60} />
          <p>React</p>
        </div>
        <div className={styles.skillItem}>
          <SiVite size={60} />
          <p>Vite</p>
        </div>
        <div className={styles.skillItem}>
          <FaGitAlt size={60} />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
