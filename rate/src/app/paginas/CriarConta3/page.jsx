'use client';  

import React from 'react';
import styles from './criarConta3.module.css'; 

const CriarConta3 = () => {
  return (
    <div className={styles.body}>
      
      <header className={styles.rate_header}>
        <h1>RATE</h1>
        <h2 className={styles.h2}>MOVIE REVIEW</h2>
      </header>
      <div className={styles.criarConta3_container}>
        <h2>BEM VINDO AO RATE!</h2>
        <p className={styles.p}>Conta criada com sucesso!</p>
        <a href="/paginas/Login" className={styles.button}>Fazer Login</a>
      </div>
    </div>
  );
};

export default CriarConta3;
