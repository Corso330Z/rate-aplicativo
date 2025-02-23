import React from "react";
import styles from "./favoritosADM.module.css";  // Importa o arquivo de CSS Module
import Header from "@/components/header/Header";
import LateralBar from '@/components/lateralBarAdm/LateralBarAdm';

const Favoritos = () => {
  return (
    <div className={styles.body}> 
      <Header />

      <main>
        <section className={styles.blocos_filmes}> 
          <div className={styles.card_remover}> 
            <button className={styles.btn_remover}>Remover</button>
          </div>
          <div className={styles.info_fav}> 
            <div className={styles.favs}> 
              <h1 className={styles.h1}>Atores favoritos:</h1>
            </div>
            <div className={styles.card_blocos}> 
              {Array(9)
                .fill(null)
                .map((_, index) => (
                  <a key={index} href={"/paginas/ClassificacaoAtorADM"}>
                    <div className={styles.blocos}></div> 
                  </a>
                ))}
            </div>
            <div className={styles.favsSe}> 
              <h1 className={styles.h1}>Filmes favoritos:</h1>
            </div>
            <div className={styles.card_blocos}> 
              {Array(9)
                .fill(null)
                .map((_, index) => (
                  <a key={index} href={"/paginas/ClassFilmADM"}>
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

export default Favoritos;
