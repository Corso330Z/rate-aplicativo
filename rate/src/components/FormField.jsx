import React from 'react';

const Formulario = () => {
  const InputField = ({ id, label, type = 'text', placeholder }) => (
    <div className="input-field">
      <label htmlFor={id} id={label}>{label}</label>
      <input 
        type={type} 
        id={id} 
        name={id} 
        placeholder={placeholder} 
        required 
      />
    </div>
  );

  return (
    <form id='styles.form'>
      <InputField id="nome" label="Nome" placeholder="Digite o nome" />
      <InputField id="sinopse" label="Sinopse" placeholder="Digite a sinopse" />
      <InputField id="data-lancamento" label="Data de lançamento" type="date" placeholder="Selecione a data" />
      <InputField id="diretor" label="Diretor" placeholder="Digite o nome do diretor" />
      <InputField id="produtor" label="Produtor" placeholder="Digite o nome do produtor" />
      <InputField id="elenco" label="Elenco" placeholder="Digite o nome do elenco" />
      <InputField id="genero" label="Gênero" placeholder="Digite o gênero" />
    </form>
  );
};

export default Formulario;
