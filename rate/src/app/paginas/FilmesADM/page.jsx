import React from "react";
import styles from "./filmes_ADM.module.css";  
import Header from "@/components/header/Header";
import LateralBar from '@/components/lateralBarAdm/LateralBarAdm';

const FilmesADM = () => {
  return (
    <div className={styles.body}> 
      <Header />
      
      <main>
        <section className={styles.blocos_filmes}> 
          <div className={styles.card_adc}> 
            <a href="/paginas/AdcFilme">
              <button id={styles.btn_adc}>ADICIONAR +</button>
            </a>
          </div>
          <div className={styles.info_filme}> 
            <div className={styles.filmes}> 
              <h1 className={styles.h1}>Filmes:</h1>
            </div>
            <div className={styles.card_blocos}> 
              {Array(21)
                .fill(null)
                .map((_, index) => (
                  <a key={index} href="/paginas/ClassFilmADM">
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

export default FilmesADM;
