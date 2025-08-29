// src/components/Header.jsx

import styles from "./Header.module.css"; // 1. Importamos os estilos

function Header() {
  return (
    // 2. Aplicamos a classe 'header'
    <header className={styles.header}>
      {/* 3. Aplicamos a classe 'nav' */}
      <nav className={styles.nav}>
        {/* 4. Aplicamos a classe 'logo' */}
        <div className={styles.logo}>
          <span className={styles.logoK}>K</span>
          <span className={styles.logoSantos}>SANTOS</span>
        </div>

        {/* 5. Aplicamos a classe 'navList' */}
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
    </header>
  );
}

export default Header;
