'use client';
import { useState } from "react";
import styles from './visu_sugs_ator.module.css';
import Header from "@/components/header/Header";
import LateralBar from "@/components/lateralbar/lateralBar";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react';

const VizuSugsAtor = () => {
  const [likeCount, setLikeCount] = useState(0);  
  const [dislikeCount, setDislikeCount] = useState(0); 
  const [clicarLike, setClicarLike] = useState(false); 
  const [clicarDislike, setClicarDislike] = useState(false); 
  const router = useRouter();

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
          setDislikeCount(0); // Se já estiver clicado, reseta o contador
      } else {
          setDislikeCount(1); // Se não, incrementa o dislike
      }
      setClicarDislike(!clicarDislike); // Alterna o estado do dislike

      // Reseta o like quando dislike é clicado
      if (clicarLike) {
          setLikeCount(0);
          setClicarLike(false);
      }
  };

  return (
    <div className={styles.body}>
      <Header/>

      <main>
        <section className={styles.blocos_filmes}>
          <div className={styles.divVoltar}>
            <a >
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
              
              <div className={styles.avaliacao}>
                <button className={styles.k} onClick={handleLikeClick}>
                  {/* O número de like só aparece após clicar */}
                  {clicarLike && <span className={styles.likeCount}>{likeCount}</span>}
                  <i className={styles.fasfa_thumbs_up}><BiSolidLike /></i>
                </button>
                <button className={styles.nk} onClick={handleDislikeClick}>
                  {/* O número de dislike só aparece após clicar */}
                  {clicarDislike && <span className={styles.likeCount}>{dislikeCount}</span>}
                  <i className={styles.fasfa_thumbs_down}><BiSolidDislike /></i>
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

export default VizuSugsAtor;

