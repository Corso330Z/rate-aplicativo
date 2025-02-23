'use client';

import React, { useState } from "react";
import styles from './redefSenha1.module.css';
import { useRouter } from 'next/navigation';

const RedefinirSenha1 = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const router = useRouter();

  // Regex para validar o e-mail
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação do e-mail
    if (!email) {
      setEmailError('Por favor, insira seu e-mail');
    } else if (!emailRegex.test(email)) {
      setEmailError('Por favor, insira um e-mail válido');
    } else {
      setEmailError('');
      // Redireciona para a próxima página após a validação
      router.push('/paginas/RedefSenha2');
    }
  };

  return (
    <div className={styles.body}>
      <header className={styles.rate_header}>
        <h1>RATE</h1>
        <h2>MOVIE REVIEW</h2>
      </header>
      <div className={styles.container}>
        <h2 className={styles.title}>REDEFINIR SENHA</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="" style={{ color: 'red', fontSize: '14px' }}>{emailError}</p>}
          <button type="submit" className={styles.button}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default RedefinirSenha1;
