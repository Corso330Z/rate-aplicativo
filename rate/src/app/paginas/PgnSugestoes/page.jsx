import React from "react";
import styles from './sugestoes.module.css'
import Header from "@/components/header/Header";
import LateralBar from "@/components/lateralbar/lateralBar";


const Sugestao = () => {


  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_sugs}>
          <div className={styles.card_sug}>
            <a href="/paginas/PgnMinhasSugestoes" className={styles.link_sem_sublinhado}>
              <button className={styles.btn_mi_sugs}>Minhas sugestões</button>
            </a>
          </div>

          <div className={styles.info_sug}>
            <div className={styles.sugestoes}>
              <h1>Sugestões de filme:</h1>
            </div>
            <div className={styles.card_blocos}>
              {Array.from({ length: 9 }).map((_, index) => (
                <a className={styles.ancoraMap} key={index} href="/paginas/VisuSugsFilm">
                  <div className={styles.blocos}>
                    <h1 className={styles.titulo}>Os Vingadores</h1>
                    <div className={styles.bloco2}></div>
                  </div>
                </a>
              ))}
            </div>
            <div className={styles.sugestoes}>
              <h1>Sugestões de ator:</h1>
            </div>
            <div className={styles.card_blocos}>
              {Array.from({ length: 9 }).map((_, index) => (
                <a className={styles.ancoraMap} key={index} href="/paginas/VisuSugsAtor">
                  <div className={styles.blocos}>
                    <h1 className={styles.titulo}>Os Vingadores</h1>
                    <div className={styles.bloco2}></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
          <LateralBar />
        </section>
      </main>
    </div>
  );
};

export default Sugestao;
