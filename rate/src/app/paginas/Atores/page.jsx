import React from "react";
import styles from "./atores.module.css";
import Header from "@/components/header/Header";
import LateralBar from "@/components/lateralbar/lateralBar";

const Atores = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_ato}>
          <div className={styles.info_ato}>
            <div className={styles.atores}>
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

export default Atores;
