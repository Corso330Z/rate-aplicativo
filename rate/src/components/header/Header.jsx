'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; 
import styles from './Header.module.css'
import { Search, X } from 'lucide-react';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      searchRef.current && !searchRef.current.contains(event.target) &&
      !event.target.closest(`.${styles.botaoPesq}`)
    ) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.cor1}>
          <h1 className={styles.rate}>RATE</h1>
          <h2 className={styles.movie}>MOVIE REVIEW</h2>
        </div>
        <div className={styles.cinzacl}></div>
        <div className={styles.cinzaes}>
          <button className={styles.botaoPesq} onClick={() => setShowSearch(!showSearch)}>
            <Search size={24} className={styles.lupa} />
          </button>
          {showSearch && (
            <div className={styles.searchCard} ref={searchRef}>
              <input
                type="text"
                placeholder="Pesquisar..."
                className={styles.searchInput}
              />
              <button className={styles.closeButton} onClick={() => setShowSearch(false)}>
                <X size={18} />
              </button>
            </div>
          )}
        </div>
        <div className={styles.preto}>
          <div className={styles.botoes_perfil}>
            <button className={styles.botaoNotifi} onClick={() => setShowNotifications(!showNotifications)}>
              <Image
                id={styles.sino}
                src="/img/notificacao.png" 
                alt="Sino de notificação"
                width={24} 
                height={24} 
              />
            </button>
            {showNotifications && (
              <div className={styles.notificationCard}>
                <p>Nenhuma notificação</p>
              </div>
            )}
            <button className={styles.botaoAmigos}>
              <a href="/paginas/Amigos">
                <Image
                  id={styles.tres}
                  src="/img/amigos.png" 
                  alt="Ícone de amigos"
                  width={24}
                  height={24}
                />
              </a>
            </button>
            <button className={styles.botaoPerfil}>
              <a href="/paginas/Perfil">
                <Image
                  id={styles.perfil}
                  src="https://img.icons8.com/?size=100&id=85147&format=png&color=737373" 
                  alt="Ícone de perfil"
                  width={24}
                  height={24}
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
