'use client';

import React, { useState, useEffect } from "react";
import styles from './redefSenha2.module.css';
import { useRouter } from 'next/navigation';

const RedefinirSenha2 = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minuto
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  // Atualizar o contador a cada segundo
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer); // Limpar o intervalo quando o componente for desmontado
    }
  }, [timeLeft]);

  // Função para atualizar o código de verificação
  const handleChange = (index, value) => {
    if (value.length > 1) return; // Limitar a 1 caractere
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    checkCodeCompletion(newCode);

    // Focar no próximo input se o valor for preenchido
    if (value && index < 3) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  // Função para verificar se todos os campos estão preenchidos
  const checkCodeCompletion = (newCode) => {
    if (newCode.every(num => num !== "")) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isComplete) {
      router.push('/paginas/RedefSenha3'); // Redireciona para a próxima página
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <header className={styles.rate_header}>
          <h1>RATE</h1>
          <h2>MOVIE REVIEW</h2>
        </header>
        <div className={styles.card}>
          <h2 className={styles.title}>REDEFINIR SENHA</h2>
          <p className={styles.subtitle}>Código de verificação</p>
          <div className={styles.code_inputs}>
            {code.map((num, index) => (
              <input
                key={index}
                type="text"
                id={`code-${index}`} // ID único para cada input
                className={styles.code_input}
                maxLength="1"
                value={num}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => {
                  // Voltar para o campo anterior se o usuário apagar
                  if (e.key === "Backspace" && index > 0 && num === "") {
                    document.getElementById(`code-${index - 1}`).focus();
                  }
                }}
              />
            ))}
          </div>
          <p className={styles.expire_text}>Expira em {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}</p>
          <button 
            className={styles.button} 
            onClick={handleSubmit} 
            disabled={!isComplete} // Desabilita o botão se o código não estiver completo
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedefinirSenha2;
