import React from 'react';
import styles from './mod_sugs_filme.module.css';

function ModSugsFilm() {
    // const goBack = () => {
    //     window.history.back();
    // };
    const ClassificacaoButton = ({ src, alt, iconClass }) => (
        <button type="button" className={styles.button}>
            <img src={src} alt={alt} className={styles[iconClass]} />
        </button>
    );
    const InputField = ({ id, label, type = 'text', placeholder }) => (
        <div  className="input-field">
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
            <div className={styles.botoes}>
                <div className={styles.seta_voltar}>
                <a href="/paginas/PgnFilmes">
                    <button className={styles.back_button}>&#8592;</button>
                </a>
                </div>
            </div>

            {/* Quando formos fazer o back, temos de achar um jeito de fazer com que na hora de o usuário clicar em modificar, apareça as 
            informações já dadas anteriormente e ele apenas mexa naquelas que ele precise, por isso não deixei o required */}
            <div className={styles.container}>
                <h2 className={styles.h2}>MODIFICAR SUGESTÃO</h2>
                <div className={styles.form_container}>
                    <img src="/img/marvel.jpeg" alt="Ator" className={styles.ator_image} />
                    <form id={styles.form}>
                        <InputField id="nome" label="Nome:" placeholder="Digite o nome" />
                        <InputField id="sinopse" label="Sinopse:" placeholder="Digite a sinopse" />
                        <InputField id="data-lancamento" label="Data de lançamento:" type="date" placeholder="Selecione a data" />
                        <InputField id="diretor" label="Diretor:" placeholder="Digite o nome do diretor" />
                        <InputField id="produtor" label="Produtor:" placeholder="Digite o nome do produtor" />
                        <InputField id="elenco" label="Elenco:" placeholder="Digite o nome do elenco principal" />
                        <InputField id="genero" label="Gênero:" placeholder="Digite o gênero" />
                    </form>
                    <form id={styles.atorForm}>


                        <div className={styles.contai}>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="img/AL.jpg" alt="Indicação livre" />
                            </button>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="img/A10.jpg" alt="Indicação acima de 11 anos" />
                            </button>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="img/A12.jpg" alt="Indicação acima de 12 anos" />
                            </button>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="img/A14.png" alt="Indicação acima de 14 anos" />
                            </button>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="img/A16.png" alt="Indicação acima de 16 anos" />
                            </button>
                            <button className={styles.but_livre}>
                                <img className={styles.livre} src="img/A18.png" alt="Indicação acima de 18 anos" />
                            </button>
                        </div>
                        <div className={styles.button_group}>
                            <a href="/paginas/PngSugestoes">
                                <button type="button" id={styles.cance}>Cancelar</button>
                            </a>
                            <a href="/paginas/PngSugestoes">
                            <button type="submit" id={styles.ad}>Modificar</button>
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default ModSugsFilm;
