import React from 'react';
import styles from './classficacaoImg.module.css';

const Classificacao = () => {
  const ClassificacaoButton = ({ src, alt, iconClass }) => (
    <button type="button" className={styles.button}>
      <img src={src} alt={alt} className={styles[iconClass]} />
    </button>
  );

  return (
    <div className={styles.container}>
      <ClassificacaoButton src="img/AL.jpg" alt="indicação livre" iconClass={styles.ícone1} />
      <ClassificacaoButton src="img/A10.jpg" alt="indicação acima de 10 anos" iconClass={styles.ícone2} />
      <ClassificacaoButton src="img/A12.jpg" alt="indicação acima de 12 anos" iconClass={styles.icon3} />
      <ClassificacaoButton src="img/A14.png" alt="indicação acima de 14 anos" iconClass={styles.icon4} />
      <ClassificacaoButton src="img/A16.png" alt="indicação acima de 16 anos" iconClass={styles.icon5} />
      <ClassificacaoButton src="img/A18.png" alt="indicação acima de 18 anos" iconClass={styles.icon6} />
    </div>
  );
};

export default Classificacao;
