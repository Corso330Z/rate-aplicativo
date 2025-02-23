'use client';
import React, { useState } from "react";
import styles from './perfil_amg.module.css';
import {UserRoundMinus, ArrowLeft} from 'lucide-react';
import { useRouter  } from "next/navigation";

const PerfilAmg = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const router = useRouter();


  return (
    <div className={styles.body}>
      <div className={styles.divVoltar}>
            <a >
              <button onClick={() => window.history.length > 1 ? router.back() : router.push('/')} className={styles.botaoVoltar}>
                <ArrowLeft size={35} className={styles.setaVoltar} />
              </button>
            </a>
      </div>
      <div className={styles.top_icons}>
        <p className={styles.rev}>Remover</p>
        <button className={styles.botaoDesamigo}><UserRoundMinus size={35} className={styles.desamigo}/></button>
        {/* <img src="img/🦆 icon _person remove_.png" alt="remover amigo" className={styles.desamigo} role="button" /> */}
      </div>

      <div className={styles.containe}>
        <div className={styles.content}>
          <div className={styles.left_container}>
            <div className={styles.profile_picture}>
              <img src="/img/Group-44.png" alt="User Icon" id="edicao" />
            </div>
          </div>

          <div className={styles.right_container}>
            <form id="profile-form">
              <div className={styles.info_container}>
                <div className={styles.info}>
                  <label htmlFor="name" className={styles.info_text}>Nome (apelido):</label>
                  <div className={styles.input_wrapper}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={styles.input_text}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>


                <div className={styles.info}>
                  <label htmlFor="bio" className={styles.Bio}>Bio:</label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    className={styles.input_text}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.botoes}>
                <a href="/paginas/Comentarios">
                  <button type="button" className={styles.conta_botao}>Ver comentários</button>
                </a>
                <a href="/paginas/PgnInicial">
                  <button type="button" className={styles.conta_botao}>Voltar</button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PerfilAmg;
