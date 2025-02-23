'use client';
import React from "react";
import Header from "@/components/header/Header";
import LateralBar from '@/components/lateralBarAdm/LateralBarAdm';
import styles from "./class_filmeADM.module.css";
import { useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react';

const ClassFilmADM = () => {
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
                <section className={styles.filminho}>
                    <div className={styles.informacao}>
                        <div className={styles.mov_info}>
                            <div className={styles.detalhes}>
                                <div className={styles.infoDados}>
                                    <div className={styles.parte1}>
                                        <h1 className={styles.movie_titulo}>Nome do filme</h1>
                                        <div className={styles.movie_ava}>
                                            <span className={styles.rating_strela}>⭐</span>
                                            <span className={styles.rating_valor}>4,7</span>
                                        </div>
                                        <div className={styles.movi_imag}>
                                            <img alt="" />
                                        </div>
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
                                <div className={styles.parte2}>
                                    <div className={styles.mov_text}>
                                        <p><strong>Data de Lançamento:</strong></p>
                                        <p><strong>Sinopse:</strong></p>
                                        <p><strong>Diretor:</strong></p>
                                        <p><strong>Produtor:</strong></p>
                                        <p><strong>Elenco:</strong></p>
                                        <p><strong>Gênero:</strong></p>
                                        <div className={styles.movie_rating_badge}>
                                            <img className={styles.livr} src="/img/AL.jpg" alt="Indicação livre" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className={styles.comments_secao}>
                                <div className={styles.comments}>
                                    <h2 className={styles.h2}>Comentários:</h2>
                                    <div className={styles.comment_caixa}>
                                        {[...Array(5)].map((_, i) => (
                                            <div className={styles.coment} key={i}>
                                                <p>0 👍🏻</p>
                                            </div>
                                        ))}
                                        <div className={styles.adicionar_comment}>
                                            <input type="text" placeholder="   Adicionar comentário" id="adcComen" className={styles.input}/>
                                    
                                        </div>
                                        <button className={styles.enviar}>Enviar</button>
                                    </div>
                                </div>
                                
                                
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

export default ClassFilmADM;
