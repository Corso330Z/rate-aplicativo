'use client';
import React, { useState } from 'react';
import styles from './adcAtor.module.css';
import { useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react';

const InputField = ({ id, label, type = 'text', placeholder, min }) => (
  <div className={styles.inputField}>
    <label htmlFor={id} className={styles.labelInput}>{label}</label>
    <input 
      type={type} 
      id={id} 
      name={label} 
      placeholder={placeholder} 
      required 
      min={min} 
      className={styles.input}
    />
  </div>
);

const AdcAtor = () => {
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Exibe a imagem escolhida
    }
  };

  return (
    <div className={styles.cards}>
      {/* Botão de Voltar */}
      <div className={styles.divVoltar}>
        <button 
          onClick={() => window.history.length > 1 ? router.back() : router.push('/')} 
          className={styles.botaoVoltar}
        >
          <ArrowLeft size={35} className={styles.setaVoltar} />
        </button>
      </div>

      <div className={styles.container}>
        <h2 className={styles.h2}>ADICIONAR ATOR</h2>
        
        <div className={styles.form_container}>
          {/* Exibe a imagem se uma for escolhida */}
          {image && <img src={image} alt="Imagem escolhida" className={styles.ator_image} />}

          {/* Botão de escolha de imagem */}
          <label className={styles.uploadLabel}>
            <input 
              type="file" 
              accept="image/*" 
              className={styles.uploadInput} 
              onChange={handleImageChange} 
            />
          </label>

          <form className={styles.atorForm}>
            <InputField id="nome" label="Nome: " placeholder="Digite o nome" required />
            <div className={styles.inputUnico}>
              <InputField 
                id="nascimento" 
                label="Nascimento:" 
                type="date" 
                placeholder="Selecione a data de nascimento" 
                required
                min="1930-01-01" 
              />
            </div>

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

export default AdcAtor;
