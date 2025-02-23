import React from "react";
import styles from "./atores_ADM.module.css"
import Header from "@/components/header/Header";
import LateralBar from '@/components/lateralBarAdm/LateralBarAdm';

const Atores = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_ato}>
          <div className={styles.card_adc}> 
            <a href="/paginas/AdcAtor">
              <button id={styles.btn_adc}>ADICIONAR +</button>
            </a>
          </div>
          <div className={styles.info_ato}>
            <div className={styles.atores}>
              <h1 className={styles.h1}>Atores: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(21)].map((_, index) => (
                <a key={index} href={`/paginas/ClassificacaoAtorADM`}>
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

export default Atores;
