'use client';
import React from 'react';
import styles from './add_gen.module.css';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react';

const InputField = ({ id, label, type = 'text', placeholder }) => (
  <div className={styles.inputField}>
    <label htmlFor={id} className={styles.labelInput}>{label}</label>
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

const AdcGen = () => {
  const router = useRouter();
  return (
    <div className={styles.cards}>
      {/* Botão de Voltar */}
      <div className={styles.divVoltar}>
        <a >
          <button onClick={() => window.history.length > 1 ? router.back() : router.push('/')} className={styles.botaoVoltar}>
            <ArrowLeft size={35} className={styles.setaVoltar} />
          </button>
        </a>
      </div>

      <div className={styles.container}>
        <h2 className={styles.h2}>ADICIONAR GÊNERO</h2>
        
        <div className={styles.form_container}>
          {/* Imagem do Ator */}
          <img src="/img/animacao.avif" alt="Gêneros" className={styles.gen_image} />

          {/* Formulário */}
          <form className={styles.genForm}>
            <InputField id="nome" label="Nome: " placeholder="Digite o nome" required/>
            

            {/* Botões */}
            <div className={styles.button_group}>
              <a href="/paginas/VisuMinSugs">
                <button type="button" className={styles.cance}>Cancelar</button>
              </a>
              <button type="submit" className={styles.add}>Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdcGen;
