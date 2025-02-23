import React from 'react';
import styles from './inicial.module.css'
import Header from "@/components/header/Header";
import LateralBar from "@/components/lateralbar/lateralBar";

const Inicial = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_filmes}>
          {/* <div className="card_login">
            <a href="login.html">
              <button id="btn_login">Login</button>
            </a>
          </div> */}
          <div className={styles.info_inicio}>
            <div className={styles.tit_film}>
              <h1 className={styles.h1}>Filmes: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(21)].map((_, index) => (
                <a key={index} href={`/paginas/ClassFilm`}>
                  <div className={styles.blocos}></div>
                </a>
              ))}
            </div>
            <div className={styles.tit_ator}>
              <h1 className={styles.h1}>Atores: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(21)].map((_, index) => (
                <a key={index} href={`/paginas/ClassificacaoAtor`}>
                  <div className={styles.blocos}></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <LateralBar />
      </main>
    </div>
  );
};

export default Inicial;