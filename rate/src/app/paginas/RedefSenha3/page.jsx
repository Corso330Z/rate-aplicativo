'use client';

import React, { useState } from "react";
import styles from './redefSenha3.module.css';
import { useRouter } from 'next/navigation';

const RedefinirSenha3 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // Regex para validar a senha (mínimo 8 caracteres, 1 maiúscula, 1 caractere especial, 1 número)
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).{8,}$/;

  const validatePassword = (value) => {
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres, 1 letra maiúscula, 1 caractere especial e 1 número.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("As senhas não coincidem.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordError && !confirmPasswordError && password && confirmPassword) {
      setShowModal(true); // Exibe o modal de sucesso
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Fecha o modal
    router.push('/paginas/Login'); // Redireciona para a tela de Login
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains(styles.modal_overlay)) {
      setShowModal(false); // Fecha o modal ao clicar fora
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <header className={styles.rate_header}>
          <h1>RATE</h1>
          <h2>MOVIE REVIEW</h2>
        </header>
        <div className={styles.container_redefinir}>
          <h2 className={styles.title}>REDEFINIR SENHA</h2>

          <label className={styles.label} htmlFor="password">
            Nova senha:
          </label>
          <input
            type="password"
            id={styles.password}
            className={styles.input}
            value={password}
            placeholder="Digite sua nova senha..."
            onChange={(e) => validatePassword(e.target.value)}
          />
          {passwordError && <p style={{ color: 'red', fontSize: '14px' }}>{passwordError}</p>}

          <label className={styles.label} htmlFor="confirmPassword">
            Confirmar senha:
          </label>
          <input
            type="password"
            id={styles.confirmPassword}
            className={styles.input}
            value={confirmPassword}
            placeholder="Confirme sua nova senha..."
            onChange={(e) => validateConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && <p className={styles.error} style={{ color: 'red', fontSize: '14px' }}>{confirmPasswordError}</p>}

          <button
            className={styles.button}
            onClick={handleSubmit}
            disabled={!!passwordError || !!confirmPasswordError || !password || !confirmPassword} // Desabilita o botão se houver erro
          >
            Redefinir
          </button>
        </div>
      </div>

      {/* Modal de sucesso */}
      {showModal && (
        <div className={styles.modal_overlay} onClick={handleClickOutside}>
          <div className={styles.modal}>
            <h3>Senha redefinida com sucesso!</h3>
            <div className={styles.botoes}>
              <button className={styles.close_button} onClick={handleCloseModal}>Fechar</button>
              <button className={styles.login_button} onClick={handleCloseModal}>Fazer Login</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RedefinirSenha3;
