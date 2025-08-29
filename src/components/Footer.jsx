// src/components/Footer.jsx

import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a
          href="https://github.com/kaiqueSantosGit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/kaiquegsantos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <p>&copy; {currentYear} Kaique Sant. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
