'use client';

import React, { useState } from 'react';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  // Regex para validar o e-mail
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (value) => {
    setEmail(value);
    if (!emailRegex.test(value)) {
      setEmailError('Por favor, insira um e-mail válido');
    } else {
      setEmailError('');
    }
  };

  // Regex para validar a senha
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).{8,}$/;

  const validatePassword = (value) => {
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordError('A senha deve ter pelo menos 8 caracteres, 1 maiúsculo, 1 número e 1 caractere especial');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples para garantir que os campos não estejam vazios
    if (!email) {
      setEmailError('Por favor, insira seu e-mail');
    }
    if (!password) {
      setPasswordError('Por favor, insira sua senha');
    }

    // Se não houver erro, redireciona o usuário para a página inicial
    if (!emailError && !passwordError && email && password) {
      router.push('/paginas/PgnInicial');
    }
  };

  return (
    <div className={styles.body}>
      
      <header className={styles.rate_header}>
        <h1>RATE</h1>
        <h2 className={styles.h2}>MOVIE REVIEW</h2>
      </header>

      <div className={styles.criarConta}>
        <p className={styles.p}>Não tem uma conta?</p>
        <a href="/paginas/CriarConta1" className={styles.criarConta_botao}>Inscreva-se</a>
      </div>

      <div className={styles.divAdm}>
        <a href="/paginas/PgnInicialAdm"><button className={styles.buttonAdm}>Entrar modo adm</button></a>
      </div>

      <div className={styles.login_container}>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_login}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              required
            />
            {emailError && <p className={styles.textoSenhaeEmail} style={{ color: 'red', fontSize: '14px' }}>{emailError}</p>}
          </div>
          <div className={styles.form_login}>
            <label htmlFor="password" className={styles.label}>Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              required
            />
            {passwordError && <p className={styles.textoSenhaeEmail} style={{ color: 'red', fontSize: '14px' }}>{passwordError}</p>}
          </div>
          <a href="/paginas/RedefSenha1" className={styles.senha}>Esqueceu sua senha?</a>
          <button 
            type="submit" 
            className={styles.botao}
            disabled={emailError || passwordError || !email || !password}
          >
            Entrar
          </button>
        </form>

        <div className={styles.opcoes_login}>
          <a href="#" className={styles.login_google}>
            <img src="img/google1.png" alt="Google" className={styles.icone}/>
          </a>
          <a href="#" className={styles.login_facebook}>
            <img src="img/facebook.png" alt="Facebook" className={styles.icone} />
          </a>
          <a href="#" className={styles.login_instagram}>
            <img src="img/instagram.png" alt="Instagram" className={styles.icone} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
