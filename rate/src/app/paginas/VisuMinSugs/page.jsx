import React from "react";
import styles from './visu_min_sug.module.css'
import Header from "@/components/header/Header";
import LateralBar from "@/components/lateralbar/lateralBar";

const VizuMiSugs = () => {

  return (
    <div className={styles.body}>
      <Header/>

      <main>
        <section className={styles.blocos_filmes}>
          <div className={styles.seta_voltar}>
          <a href="/paginas/PgnFilmes">
            <button className={styles.bac_button}>&#8592;</button>
            </a>
          </div>
          <div className={styles.movie_details}>
            <div className={styles.part1}>
              <h1 className={styles.movi_name}>Nome do filme</h1>
              <div className={styles.movie_image}>
                <div className={styles.postera_frame}></div>
              </div>
            </div>
            <div className={styles.parte2}>
              <p className={styles.nam}>Nome:</p>
              <p className={styles.nam}>Idade:</p>
              <p className={styles.nam}>Nascimento:</p>
              
            </div>
            <div className={styles.parte3}>
              <a href="/paginas/PerfilComen">
                <div className={styles.use_card}>
                  <div className={styles.profile_icon}>
                    <img className={styles.perfil} src="/img/Perfil.png" alt="Ícone de usuário" />
                  </div>
                  <span className={styles.username}>@fulanotany</span>
                </div>
              </a>
              <div className={styles.adc_remov_button}>
                        <a href="/paginas/PgnFilmes">
                            <div className={styles.adicionar}><button className={styles.adc_button}>Modificar</button></div>
                        </a>
                        <a href="/paginas/PgnFilmes">
                            <div className={styles.remover}><button className={styles.remove_button}>Remover</button></div>
                        </a>
                    </div>
              <div className={styles.avaliacao}>
                <button className={styles.k}>
                  {/* <span className="likes">0 </span> */}
                  <i className={styles.fasfa_thumbs_up}>👍🏻</i>
                </button>
                <button className={styles.nk}>
                  {/* <span className="likes">0 </span> */}
                  <i className={styles.fasfa_thumbs_down}>👎🏻</i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <LateralBar/>
        </section>
      </main>
    </div>
  );
};

export default VizuMiSugs;

