'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './perfil.module.css';
import { Trash2, LogOut, ArrowLeft } from 'lucide-react';


const Perfil = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [backHomePage, setBackHomePage] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const router = useRouter();


  // Função para exibir a confirmação de exclusão
  const handleDeleteAccount = () => {
    setShowDeleteConfirm(true);
    setShowExitConfirm(false); 
  };

 
  const handleExitAccount = () => {
    setShowExitConfirm(true);
    setShowDeleteConfirm(false); 
  };


  const handleConfirmDelete = () => {
    setName('');
    setEmail('');
    setBio('');
    setShowDeleteConfirm(false);
    
  };

 
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };


  const handleConfirmExit = () => {
    setShowExitConfirm(false);
   
  };


  const handleCancelExit = () => {
    setShowExitConfirm(false);
  };

 
  const perfuncao = () => {
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 3000);
  };

 
  const handleSave = (event) => {
    event.preventDefault();

    let isValid = true;
    let errorMessage = '';

    if (!name.trim()) {
      isValid = false;
      errorMessage += 'O nome é obrigatório.\n';
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.trim()) {
      isValid = false;
      errorMessage += 'O email é obrigatório.\n';
    } else if (!emailRegex.test(email.trim())) {
      isValid = false;
      errorMessage += 'O email não tem um formato válido.\n';
    }

    if (!isValid) {
      alert(errorMessage);
    } else {
      perfuncao();
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.divVoltar}>
        <a >
          <button onClick={() => window.history.length > 1 ? router.back() : router.push('/')} className={styles.botaoVoltar}>
            <ArrowLeft size={35} className={styles.setaVoltar} />
          </button>
        </a>
      </div>
      <div className={styles.top_icons}>
        <button onClick={handleDeleteAccount} className={styles.top_icones}>
          <Trash2 size={35} className={styles.lixo} />
        </button>
        <button onClick={handleExitAccount} className={styles.top_icones}>
          <LogOut size={35} className={styles.volta} />
        </button>
      </div>

      <div className={styles.containe}>
        <div className={styles.content}>
          <div className={styles.left_container}>
            <div className={styles.profile_picture}>
              <img src="/img/Group-44.png" alt="User Icon" id="edicao" />
            </div>
          </div>

          <div className={styles.right_container}>
            <form id="profile-form" onSubmit={handleSave}>
              <div className={styles.info_container}>
                <div className={styles.info}>
                  <label htmlFor="name" className={styles.info_text}>Nome (apelido):</label>
                  <div className={styles.input_wrapper}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={styles.input_text}
                      placeholder="Digite seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.info}>
                  <label htmlFor="email" className={styles.Bio}>Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input_text}
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className={styles.info}>
                  <label htmlFor="bio" className={styles.Bio}>Bio:</label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    className={styles.input_text}
                    placeholder="Uma breve bio aqui"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.divSalvar}>
                <button type="submit" className={styles.conta_botao}>Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showCard && (
        <div className={styles.card_cinza}>
          <p className={styles.texto}>Suas mudanças foram <br /> salvas com sucesso</p>
        </div>
      )}

      {showDeleteConfirm && (
        <div className={styles.confirm_box}>
          <p>Tem certeza que deseja excluir sua conta?</p>
          <div className={styles.buttons_container}>
            <button onClick={handleConfirmDelete} className={styles.confirm_button}>Sim</button>
            <button onClick={handleCancelDelete} className={styles.cancel_button}>Não</button>
          </div>
        </div>
      )}

      {showExitConfirm && (
        <div className={styles.confirm_box}>
          <p>Tem certeza que deseja sair da sua conta?</p>
          <div className={styles.buttons_container}>
          <a href="/">
            <button onClick={handleConfirmExit} className={styles.confirm_button}>Sim</button>
            </a>
            <button onClick={handleCancelExit} className={styles.cancel_button}>Não</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perfil;