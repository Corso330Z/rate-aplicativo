'use client';
import React from 'react';
import styles from './inicial_login.module.css';
import Header from "@/components/header/Header";
import LateralBar from "@/components/lateralbar/lateralBar";

const PaginaInicialLogin = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_filmes}>
          {/* Contêiner com Flexbox */}
          <div className={styles.loginContainer}>
            <a href="/paginas/Login">
              <button className={styles.btn_login}>Login</button>
            </a>
          </div>
          
          <div className={styles.info_inicio}>
            <div className={styles.tit_film}>
              <h1 className={styles.h1}>Filmes: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(21)].map((_, index) => (
                <a key={index} href={`/paginas/Filmes`}>
                  <div className={styles.blocos}></div>
                </a>
              ))}
            </div>
            <div className={styles.tit_ator}>
              <h1 className={styles.h1}>Atores: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(21)].map((_, index) => (
                <a key={index} href={`/paginas/Atores`}>
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

export default PaginaInicialLogin;
