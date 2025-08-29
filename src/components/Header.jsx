// src/components/Header.jsx

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoK}>K</span>
          <span className={styles.logoSantos}>SANTOS</span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>{" "}
      {/* Fim da div .container */}
    </header>
  );
}

export default Header;
