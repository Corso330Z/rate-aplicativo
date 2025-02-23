import React from "react";
import styles from './cometarios.module.css';
import Header from "@/components/header/Header";
import LateralBar from "@/components/lateralbar/lateralBar";


const Comentarios = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_filmes}>
          <div className={styles.card_buttons}>
            <button id="btn_modificar" className={styles.btn_modificar}>Modificar</button>
            <button id="btn_remover" className={styles.btn_remover}>Remover</button>
          </div>
          <div className={styles.info_comen}>
            <div className={styles.comen_pes}>
              <h1>Comentários pessoais: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(8)].map((_, index) => (
                <div className={styles.bloco} key={index}>
                  <div className={styles.img_comen}>
                    <a href="/paginas/PerfilComen">
                      <img className={styles.perfil} src="/img/Perfil.png" alt="Perfil" />
                    </a>
                  </div>
                  <div className={styles.blocos_int}>
                    <p>Comentário bem útil</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.comen_amigos}>
              <h1>Comentários de amizades: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(8)].map((_, index) => (
                <div className={styles.bloco} key={index}>
                  <div className={styles.img_comen}>
                    <a href="/paginas/PerfilAmg">
                      <img className={styles.perfil} src="/img/Perfil.png" alt="Perfil" />
                    </a>
                  </div>
                  <div className={styles.blocos_int}>
                    <p>Comentário bem útil</p>
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

export default Comentarios;
