import React from "react";
import styles from "./generos.module.css";  // Importa o arquivo de CSS Module
import Header from "@/components/header/Header";
import LateralBar from "@/components/lateralbar/lateralBar";

const genres = [
  "Ação", "Drama", "Para toda família", "Comédia", "Terror", "Ficção Científica", 
  "Romance", "Animação", "Documentário", "Aventura", "Fantasia", "Musical", 
  "Suspense", "Guerra", "Western", "Biografia", "Histórico", "Mistério"
]; // Array de gêneros

const Generos = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_gen}>
          <div className={styles.info_gen}>
            {genres.map((genre, genreIndex) => (
              <React.Fragment key={genreIndex}>
                <div className={styles.generosSe}>
                  <h1 className={styles.h1}>{genre}: </h1>
                </div>
                <div className={styles.card_blocos}>
                  {[...Array(9)].map((_, index) => (
                    <a key={index} href={`/paginas/ClassFilm`}>
                      <div className={styles.blocos}></div>
                    </a>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        <LateralBar />
      </main>
    </div>
  );
};

export default Generos;
