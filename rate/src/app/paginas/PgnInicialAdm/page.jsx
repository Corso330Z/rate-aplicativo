'use client';
import React from 'react';
import styles from './PgnInicialAdm.module.css'
import Header from "@/components/header/Header";
import LateralBar from '@/components/lateralBarAdm/LateralBarAdm';

const Inicial = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_filmes}>
          {/* Contêiner com Flexbox */}
          <div className={styles.voltarContainer}>
            <a href="/paginas/PgnInicialLogin"><button className={styles.voltarBotao}>Modo usuário</button></a>
          </div>

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
