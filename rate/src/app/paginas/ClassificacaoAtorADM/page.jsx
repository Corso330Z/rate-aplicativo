'use client';
import React from "react";
import styles from "./class_ator_ADM.module.css";
import Header from "@/components/header/Header";
import LateralBar from '@/components/lateralBarAdm/LateralBarAdm';
import { useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react';

const ClassificacaoAtorADM = () => {
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
        <section className={styles.secao_ator}>
          <div className={styles.area_botoes}>
            <div className={styles.botao_favorito}>
              <button className={styles.estrela_favorito}>⭐ <span>4,7</span></button>
            </div>
          </div>
          <div className={styles.info_ator}>
            <div className={styles.dados_ator}>
              <h1 id={styles.h1}>Nome do ator </h1>
              <div className={styles.imagem_ator}>
                <img src="./" alt="" />
              </div>
              <div className={styles.texto_ator}>
                <p><strong>Idade:</strong> 35 anos</p>
                <p><strong>Nascimento:</strong> 10 de março de 1988</p>
              </div>
              <div className={styles.botoes}>
                <div className={styles.removerr}>
                  <button className={styles.remove_botao}>Remover</button>
                </div>
                <div className={styles.modificarr}>
                  <a href="/paginas/ModSugsFilm">
                    <button className={styles.mod_button}>Modificar</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.secao_filmes}>
              <h2>Filmes:</h2>
              <div className={styles.area_filmes}>
                {[...Array(8)].map((_, index) => (
                  <a key={index} href="/paginas/ClassFilm">
                    <div className={styles.bloco_filme}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
         
        </section>
        
       
         
       
      </main>
      <LateralBar />
    </div>
  );
};

export default ClassificacaoAtorADM;
