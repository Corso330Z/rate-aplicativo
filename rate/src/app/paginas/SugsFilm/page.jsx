'use client';
import React from 'react';
import styles from './sugs_filme.module.css';
import { useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react';

function SugsFilm() {
    // const goBack = () => {
    //     window.history.back();
    // };
    const router = useRouter();
    const ClassificacaoButton = ({ src, alt, iconClass }) => (
        <button type="button" className={styles.button}>
            <img src={src} alt={alt} className={styles[iconClass]} />
        </button>
    );
    const InputField = ({ id, label, type = 'text', placeholder }) => (
        <div className="input-field">
            <label className={styles.labelInput} htmlFor={id} id={label}>{label}</label>
            <input
                type={type}
                id={id}
                name={label}
                placeholder={placeholder}
                required
                className={styles.input}
            />
        </div>
    );

    return (
        <div className={styles.cards}>
            <div className={styles.divVoltar}>
                <a >
                    <button onClick={() => window.history.length > 1 ? router.back() : router.push('/')} className={styles.botaoVoltar}>
                        <ArrowLeft size={35} className={styles.setaVoltar} />
                    </button>
                </a>
            </div>
            <div className={styles.container}>
                <h2 className={styles.h2}>SUGERIR FILME</h2>
                <div className={styles.form_container}>
                    <form id={styles.form}>
                        <InputField id="nome" label="Nome:" placeholder="Digite o nome" required/>
                        <InputField id="sinopse" label="Sinopse:" placeholder="Digite a sinopse" required/>
                        <InputField id="data-lancamento" label="Data de lançamento:" type="date" placeholder="Selecione a data" required/>
                        <InputField id="diretor" label="Diretor:" placeholder="Digite o nome do diretor" required/>
                        <InputField id="produtor" label="Produtor:" placeholder="Digite o nome do produtor" required/>
                        <InputField id="elenco" label="Elenco:" placeholder="Digite o nome do elenco principal" required/>
                        <InputField id="genero" label="Gênero:" placeholder="Digite o gênero" required/>
                    </form>
                    <form id={styles.atorForm}>


                        <div className={styles.contai}>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="/img/AL.jpg" alt="Indicação livre" />
                            </button>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="/img/A10.jpg" alt="Indicação acima de 11 anos" />
                            </button>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="/img/A12.jpg" alt="Indicação acima de 12 anos" />
                            </button>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="/img/A14.png" alt="Indicação acima de 14 anos" />
                            </button>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="/img/A16.png" alt="Indicação acima de 16 anos" />
                            </button>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="/img/A18.png" alt="Indicação acima de 18 anos" />
                            </button>
                        </div>
                        <div className={styles.button_group}>
                            <a href="/paginas/PgnSugestoes">
                                <button type="button" id={styles.cance}>Cancelar</button>
                            </a>
                            <div className={styles.button_group_dois}>
                            <a href="/paginas/PgnSugestoes">
                            <button type="button" id={styles.ad}>Sugerir</button>
                            </a>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default SugsFilm;
