'use client';
import React from 'react';
import styles from './ModSugsAtor.module.css';
import { useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react';

function ModSugsAtor() {
  // const goBack = () => {
  //     window.history.back();
  // };
  const router = useRouter();
  const ClassificacaoButton = ({ src, alt, iconClass }) => (
      <button type="button" className={styles.button}>
          <img src={src} alt={alt} className={styles[iconClass]} />
      </button>
  );
  const InputField = ({ id, label, type = 'text', placeholder }) => (
      <div  className="input-field">
          <label className={styles.labelInput} htmlFor={id} id={label}>{label}</label>
          <input
              type={type}
              id={id}
              name={label}
              placeholder={placeholder}
              required
              className={styles.input}
          />
      </div>
  );

  return (
    <div className={styles.cards}>
      {/* Botão de Voltar */}
      <div className={styles.divVoltar}>
        <a>
          <button onClick={() => window.history.length > 1 ? router.back() : router.push('/')} className={styles.botaoVoltar}>
            <ArrowLeft size={35} className={styles.setaVoltar} />
          </button>
        </a>
      </div>

      <div className={styles.container}>
        <h2 className={styles.h2}>MODIFICAR SUGESTÃO</h2>
        
        <div className={styles.form_container}>
          {/* Imagem do Ator */}
          <img src="/img/ator.webp" alt="Ator" className={styles.ator_image} />

          {/* Assim como em modificar filmes, temos de fazer o mesmo */}
          <form className={styles.atorForm}>
            <InputField id="nome" label="Nome: " placeholder="Digite o nome" />
            <div className={styles.inputUnico}>
              <InputField id="nascimento" label="Nascimento:" type="date" placeholder="Selecione a data de nascimento" />
            </div>
            

            <div className={styles.button_group}>
              <a href="/paginas/VisuMinSugs">
                <button type="button" className={styles.cance}>Cancelar</button>
              </a>
              <a href="/paginas/VisuMinSugs">
              <button type="submit" className={styles.add}>Modificar</button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModSugsAtor;