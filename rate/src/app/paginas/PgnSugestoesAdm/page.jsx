import React from "react";
import styles from './PgnSugestoes.module.css'
import Header from "@/components/header/Header";
import LateralBar from '@/components/lateralBarAdm/LateralBarAdm';


const SugestaoADM = () => {


  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_sugs}>

          <div className={styles.info_sug}>
            <div className={styles.sugestoes}>
              <h1>Sugestões de filme:</h1>
            </div>
            <div className={styles.card_blocos}>
              {Array.from({ length: 8 }).map((_, index) => (
                <a className={styles.ancoraMap} key={index} href="/paginas/VisuSugsFilmeAdm">
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
              {Array.from({ length: 8 }).map((_, index) => (
                <a className={styles.ancoraMap} key={index} href="/paginas/VisuSugsAtorADM">
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

export default SugestaoADM;
