"use client";
import React, { useState } from "react";
import Header from "@/components/header/Header";
import LateralBar from "@/components/lateralbar/lateralBar";
import { X } from "lucide-react";
import styles from "./mi_sugs.module.css";
import { useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react';

const MiSugestao = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.body}>
      <Header />

      <main>
        <div className={styles.divVoltar}>
          <a >
            <button onClick={() => window.history.length > 1 ? router.back() : router.push('/')} className={styles.botaoVoltar}>
              <ArrowLeft size={35} className={styles.setaVoltar} />
            </button>
          </a>
        </div>
        <section className={styles.blocos_sugs}>
          <div className={styles.card_sug}>
            <button
              className={styles.btn_mi_sugs}
              onClick={() => setModalAberto(true)}
            >
              ADICIONAR +
            </button>
          </div>

          <div className={styles.info_sug}>
            <div className={styles.sugestoes}>
              <h1>Sugestões de filme:</h1>
            </div>
            <div className={styles.card_blocos}>
              {Array.from({ length: 9 }).map((_, index) => (
                <a className={styles.arrayMap} key={index} href="/paginas/VisuSugsFilm">
                  <div className={styles.blocos}>
                    <h1 className={styles.titulo}>Os Vingadores</h1>
                    <div className={styles.bloco2}></div>
                  </div>
                </a>
              ))}
            </div>
            <div className={styles.sugestoesSe}>
              <h1>Sugestões de ator:</h1>
            </div>
            <div className={styles.card_blocos}>
              {Array.from({ length: 9 }).map((_, index) => (
                <a className={styles.arrayMap} key={index} href="/paginas/VisuSugsAtor">
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

      {/* Pop-up */}
      {modalAberto && (
        <div className={styles.overlay} onClick={() => setModalAberto(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.fechar} onClick={() => setModalAberto(false)}>
              <X size={24} />
            </button>
            <h2>Qual tipo de sugestão deseja adicionar?</h2>
            <div className={styles.botoes}>
              <a href="/paginas/SugsFilm" className={styles.btn_modal}>
                Filme
              </a>
              <a href="/paginas/SugsAtor" className={styles.btn_modal}>
                Ator
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiSugestao;
