// src/components/Contact.jsx

import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <h2 data-aos="fade-down">Entre em Contato</h2>
      <p data-aos="fade-up">
        Gostou do que viu? Vamos conversar! Preencha o formulário abaixo ou me
        encontre nas redes sociais.
      </p>
      <form
        className={styles.form}
        action="https://formspree.io/f/xzzabblg" // Vamos configurar isso depois
        method="POST"
        data-aos="fade-up"
      >
        <input type="text" name="name" placeholder="Seu Nome" required />
        <input type="email" name="email" placeholder="Seu Email" required />
        <textarea
          name="message"
          rows="7"
          placeholder="Sua Mensagem"
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}

export default Contact;
