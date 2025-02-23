'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Importa o roteador do Next.js
import styles from './criarConta1.module.css';

const CriarConta = () => {
  const router = useRouter(); // Instancia o roteador

  const handleSubmit = (e) => {
    e.preventDefault();

    // Captura os dados do formulário (opcional, se precisar salvar em um estado depois)
    const formData = new FormData(e.target);
    const dados = Object.fromEntries(formData.entries());

    console.log("Dados do formulário:", dados); // Apenas para ver no console

    // Redireciona para a próxima página
    router.push('/paginas/CriarConta2');
  };

  return (
    <div className={styles.body}>
      <header className={styles.rate_header}>
        <h1>RATE</h1>
        <h2>MOVIE REVIEW</h2>
      </header>
      <div className={styles.criarConta_container}>
        <h2 className={styles.titulo}>CRIAR CONTA</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_criar}>
            <label htmlFor="name" className={styles.label}>Nome (Apelido):</label>
            <input
              type="text"
              id="name"
              className={styles.input}
              name="name"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className={styles.form_criar}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className={styles.form_criar}>
            <label>Gênero:</label>
            <div className={styles.genero_opcoes}>
              <label className={styles.genero_box}>
                <input type="radio" className={styles.input} name="genero" value="masculino" required />
                Masculino
              </label>
              <label className={styles.genero_box}>
                <input type="radio" className={styles.input} name="genero" value="feminino" required />
                Feminino
              </label>
              <label className={styles.genero_box}>
                <input type="radio" name="genero" value="outros" className={styles.input} required />
                Outros
              </label>
            </div>
          </div>
          <div className={styles.form_criar}>
            <label className={styles.label}>Data de Nascimento:</label>
            <div className={styles.data_nascimento}>
              <select className={styles.select} name="dia" defaultValue="" required>
                <option value="" disabled>Dia</option>
                {[...Array(31)].map((_, index) => (
                  <option key={index} value={index + 1}>{index + 1}</option>
                ))}
              </select>
              <select name="mes" defaultValue="" required className={styles.select}>
                <option value="" disabled>Mês</option>
                {['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'].map((mes, index) => (
                  <option key={index} value={index + 1}>{mes}</option>
                ))}
              </select>
              <select name="ano" defaultValue="" required className={styles.select}>
                <option value="" disabled>Ano</option>
                {[...Array(40)].map((_, index) => {
                  const ano = new Date().getFullYear() - index;
                  return <option key={ano} value={ano}>{ano}</option>;
                })}
              </select>
            </div>
          </div>
          <button type="submit" className={styles.button}>Próxima</button>
        </form>
      </div>
    </div>
  );
};

export default CriarConta;