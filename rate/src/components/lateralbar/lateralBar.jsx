import React from "react";
import styles from "./LateralBar.module.css";

const LateralBar = () => {
  return (
    <section>
      <div className={styles.lateral_bar}>
        <nav className={styles.nav_botoes_lateral}>
          <div className={styles.botoes_acima}>
            <a href="#">
              <img className={styles.botoes} src="/img/menu.png" alt="Menu" />
            </a>
            <a href="/paginas/PgnInicial">
              <img className={styles.botoes} src="/img/home.png" alt="Home" />
            </a>
            <a href="/paginas/Comentarios">
              <img className={styles.botoes} src="/img/comentários.png" alt="Comentários" />
            </a>
            <a href="/paginas/PgnFilmes">
              <img className={styles.botoes} src="/img/filmes.png" alt="Filmes" />
            </a>
            <a href="/paginas/Generos">
              <img className={styles.botoes} src="/img/generos.png" alt="Gêneros" />
            </a>
            <a href="/paginas/Atores">
              <img className={styles.botoes} src="/img/atores.png" alt="Atores" />
            </a>
            <a href="/paginas/Favoritos">
              <img className={styles.botoes} src="/img/favoritos.png" alt="Favoritos" />
            </a>
          </div>
          <div className={styles.ultimo_botao}>
            <a href="/paginas/PgnSugestoes">
              <img className={styles.botoes} src="/img/sugestoes.png" alt="Sugestões" />
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default LateralBar;
