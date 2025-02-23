'use client';
import React, { useState } from "react";
import styles from './VisuSugsFilmeAdm.module.css';
import Header from "@/components/header/Header";
import LateralBar from '@/components/lateralBarAdm/LateralBarAdm';
import { useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react';
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

const VizuSugsFilmesADM = () => {
  const router = useRouter();
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [clicarLike, setClicarLike] = useState(false);
  const [clicarDislike, setClicarDislike] = useState(false);

  const handleLikeClick = () => {
    if (clicarLike) {
      setLikeCount(0);
    } else {
      setLikeCount(1);
    }
    setClicarLike(!clicarLike);

    if (clicarDislike) {
      setDislikeCount(0);
      setClicarDislike(false);
    }
  };

  const handleDislikeClick = () => {
    if (clicarDislike) {
      setDislikeCount(0);
    } else {
      setDislikeCount(1);
    }
    setClicarDislike(!clicarDislike);

    if (clicarLike) {
      setLikeCount(0);
      setClicarLike(false);
    }
  };

  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.main}>
        <section className={styles.blocos_filmes}>
          <div className={styles.divVoltar}>
            <a>
              <button onClick={() => window.history.length > 1 ? router.back() : router.push('/')} className={styles.botaoVoltar}>
                <ArrowLeft size={35} className={styles.setaVoltar} />
              </button>
            </a>
          </div>
          <div className={styles.movie_details}>
            <div className={styles.part1}>
              <h1 className={styles.movi_name}>Nome do ator</h1>
              <div className={styles.movie_image}>
                <div className={styles.postera_frame}></div>
              </div>
            </div>
            <div className={styles.divInfoButton}> 
                <div className={styles.parte2}>
                    <p className={styles.nam}>Data de Lançamento:</p>
                    <p className={styles.nam}>Sinopse:</p>
                    <p className={styles.nam}>Diretor:</p>
                    <p className={styles.nam}>Produtor:</p>
                    <p className={styles.nam}>Elenco:</p>
                    <p className={styles.nam}>Genêro:</p>
                    <img className={styles.livre} src="/img/AL.jpg" alt="Indicação livre" />
                </div>
                <div className={styles.adc_remov_button}>
                    <a href="/paginas/AdcAtor">
                      <div className={styles.adicionar}>
                        <button className={styles.adc_button}>Adicionar</button>
                      </div>
                    </a>
                    <a href="#">
                      <div className={styles.remover}>
                        <button className={styles.remove_button}>Remover</button>
                      </div>
                    </a>
                </div>
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
              <div className={styles.avaliacao}>
                <button className={styles.k} onClick={handleLikeClick}>
                  {clicarLike && <span className={styles.likeCount}>{likeCount}</span>}
                  <i className={styles.fasfa_thumbs_up}><BiSolidLike /></i>
                </button>
                <button className={styles.nk} onClick={handleDislikeClick}>
                  {clicarDislike && <span className={styles.likeCount}>{dislikeCount}</span>}
                  <i className={styles.fasfa_thumbs_down}><BiSolidDislike /></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <LateralBar />
        </section>
      </main>
    </div>
  );
};

export default VizuSugsFilmesADM;