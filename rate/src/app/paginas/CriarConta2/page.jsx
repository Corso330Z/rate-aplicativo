'use client';

import React, { useState } from 'react';
import styles from './criarConta2.module.css';

const CriarConta2 = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Regex para validar a senha (mínimo 8 caracteres, 1 maiúscula, 1 caractere especial, 1 número)
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).{8,}$/;

  const validatePassword = (value) => {
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordError('A senha deve ter pelo menos 8 caracteres, 1 letra maiúscula, 1 caractere especial e 1 número.');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError('As senhas não coincidem.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordError && !confirmPasswordError && password && confirmPassword) {
      window.location.href = "/paginas/CriarConta3";
    }
  };

  return (
    <div className={styles.body}>
      <header className={styles.rate_header}>
        <h1>RATE</h1>
        <h2>MOVIE REVIEW</h2>
      </header>
      <div className={styles.criarConta2_container}>
        <h2 className={styles.h2}>CRIAR CONTA</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_criar2}>
            <label htmlFor="password" className={styles.label}>Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="Digite sua nova senha"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              required
            />
            {passwordError && <p style={{ color: 'red', fontSize: '14px' }}>{passwordError}</p>}
          </div>
          <div className={styles.form_criar2}>
            <label htmlFor="confirmPassword" className={styles.label}>Confirmar Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={styles.input}
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => validateConfirmPassword(e.target.value)}
              required
            />
            {confirmPasswordError && <p className={styles.error} style={{ color: 'red', fontSize: '14px' }}>{confirmPasswordError}</p>}
          </div>
          <a href={password && confirmPassword && !passwordError && !confirmPasswordError ? "/paginas/CriarConta3" : "#"}>
            <button
              type="submit"
              className={styles.button}
              disabled={!!passwordError || !!confirmPasswordError || !password || !confirmPassword}
            >
              Próxima
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default CriarConta2;
