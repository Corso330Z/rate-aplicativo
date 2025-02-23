import React from "react";
import styles from "./amigos.module.css"; // Importação correta do CSS Module
import Header from "@/components/header/Header";
import LateralBar from "@/components/lateralbar/lateralBar";

const Amigos = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_amgs}>
          <div className={styles.info_comen}>
            <div className={styles.comen_pes}>
              <h1 className={styles.h1}>Amigos: </h1>
            </div>
            <div className={styles.card_blo}>
              {[...Array(16)].map((_, index) => (
                <div className={styles.bloco} key={index}>
                  <div className={styles.img_come}>
                    <a href="/paginas/PerfilComen">
                      <img className={styles.perfi} src="/img/Perfil.png" alt="Perfil" />
                    </a>
                  </div>
                  <div className={styles.blocos_in}>
                    <p className={styles.just}>@JustinBieber</p>
                    <div className={styles.div_button}>
                      <a href="/paginas/PerfilAmg">
                        <button className={styles.vizu_amg}>Visualizar perfil</button>
                      </a>
                      <button className={styles.rem_amg}>Remover amigo</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <LateralBar />
      </main>
    </div>
  );
};

export default Amigos;
