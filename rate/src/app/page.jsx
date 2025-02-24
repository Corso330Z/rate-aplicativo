import React from 'react';
import styles from './page.module.css'
import Header from '@/components/header/Header.jsx';
import LateralBar from '@/components/lateralbar/lateralBar';

const Inicial = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_filmes}>
          <div className={styles.card_login}>
            <a href="/paginas/Login">
              <button id={styles.btn_login}>Login</button>
            </a>
          </div>
          <div className={styles.info_inicio}>
            <div className={styles.tit_film}>
              <h1 className={styles.h1}>Filmes: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(21)].map((_, index) => (
                <a key={index} href={`/paginas/ClassFilm`}>
                  <div className={styles.blocos}></div>
                </a>
              ))}
            </div>
            <div className={styles.tit_ator}>
              <h1 className={styles.h1}>Atores: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(21)].map((_, index) => (
                <a key={index} href={`/paginas/ClassificacaoAtor`}>
                  <div className={styles.blocos}></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <LateralBar />
      </main>
    </div>
  );
};

export default Inicial;

// import FilmesADM from "./paginas/FilmesADM/page.jsx"; 
// import AtoresADM from "./paginas/AtoresADM/page.jsx";
// import GenerosADM from "./paginas/GenerosADM/page.jsx";
// import Generos from "./paginas/Generos/page.jsx";
// import Favoritos from "./paginas/Favoritos/page.jsx";
// import Atores from "./paginas/Atores/page.jsx";
// import PaginaInicialLogin from "./paginas/PagInicialLogin/page.jsx";
// import SugsFilm from "./paginas/SugsFilm/page.jsx";
// import ModsSugsFilm from "./paginas/ModSugsFilm/page.jsx";
// import ModsSugsAtor from "./paginas/ModSugsAtor/page.jsx";
// import Perfil from "./paginas/Perfil/page.jsx";
// import PerfilComen from "./paginas/PerfilComen/page.jsx";
// import PerfilAmg from "./paginas/PerfilAmg/page.jsx";
// import Comentarios from "./paginas/Comentarios/page.jsx";
// import AdcAtor from "./paginas/AdcAtor/page.jsx";
// import AdcGenero from "./paginas/AdcGenero/page.jsx";
// import AdcFilm from "./paginas/AdcFilme/page.jsx";
// import ClassificacaoAtor from "./paginas/ClassificacaoAtor/page.jsx";
// import ClassificacaoAtorADM from "./paginas/ClassificacaoAtorADM/page.jsx";
// import VisuSugsAtor from "./paginas/VisuSugsAtor/page.jsx";
// import Sugestao from "./paginas/PgnSugestoes/page.jsx";
// import SugestaoAdm from "./paginas/PgnSugestoesAdm/page.jsx";
// import Filmes from "./paginas/PgnFilmes/page.jsx";
// import Inicial from "./paginas/PgnInicial/page.jsx";
// import Amigos from "./paginas/Amigos/page.jsx";
// import VisualizarSugestaoFilme from "./paginas/VisuSugsFilm/page.jsx";
// import VisuSugsADM from "./paginas/VisuSugsADM/page.jsx";
// import VisuMinSugs from "./paginas/VisuMinSugs/page.jsx";
// import MinSugestao from "./paginas/PgnMinhasSugestoes/page.jsx";
// import ClassFilm from "./paginas/ClassFilm/page.jsx";
// import ClassFilmADM from "./paginas/ClassFilmADM/page.jsx";
// import CriarConta from "./paginas/CriarConta1/page.jsx";
// import CriarConta2 from "./paginas/CriarConta2/page.jsx";
// import CriarConta3 from "./paginas/CriarConta3/page.jsx";
// import Login from "./paginas/Login/page.jsx";
// import RedefinirSenha1 from "./paginas/RedefSenha1/page.jsx";
// import RedefinirSenha2 from "./paginas/RedefSenha2/page.jsx";
// import RedefinirSenha3 from "./paginas/RedefSenha3/page.jsx";
// import SugAtor from "./paginas/SugsAtor/page.jsx";

// export default function Home() {
//   return (
//     <div>
//       <main>
        
        {/*   */}
        {/* Página inicial deve ser aqui */}
        {/* Deixar pelo menos as funções prontas, ou seja, digitar e etc e salvar em variáveis, dados estáticos */}


        {/* <FilmesADM />  */}
        {/* <AtoresADM /> */}
        {/* <Generos/> */}
        {/* <GenerosADM/> */}
        {/* <Favoritos/> */}
        {/* <Atores/> */}
        {/* <PaginaInicialLogin/> */}
        {/* <SugsFilm/> */}
        {/* <ModsSugsFilm/> */}
        {/* <ModsSugsAtor/>  */}
        {/* <SugAtor/ > */}
        {/* <Perfil/> */}
        {/* <PerfilComen />  */}
        {/* <PerfilAmg /> */}
        {/* <Comentarios/> */}
        {/* <AdcAtor/> */}
        {/* <AdcGenero/> */}
        {/* <AdcFilm/> */} 
        {/* <ClassificacaoAtor />  */} {/* Refazer a estrelinha e deixar mais bonita vizualmente */}
        {/* <ClassificacaoAtorADM/> */}
        {/* <VisuSugsAtor/>  */}{/* Refazer a estrelinha e deixar mais bonita vizualmente */}
        {/* <Sugestao/>  */}
        {/* <SugestaoAdm/>  */}
        {/* <Filmes/> */}
        {/* <Inicial/>  */}
        {/* <Amigos/> */}
        {/* <VisualizarSugestaoFilme/>    */}
        {/* <VisuSugsADM/> */} {/* Está correta, mas dá para melhorar visualmente*/}
        {/* <VisuMinSugs/> */} {/* Está correta, mas dá para melhorar visualmente*/}
        {/* <MinSugestao/> */}
        {/*<ClassFilm/> */} {/* Refazer a estrelinha, colocar o botão de favoritos, deixar mais bonita vizualmente, arrumar o local dos botões e colocar para que os comentários funcionem e recebam dados estáticos */}
        {/* <ClassFilmADM/>*/} {/*Assim como no anterior, melhorar visualmente*/}
        {/* <CriarConta/> */} {/*Voltar e ver os detalhes de criar contas*/}
        {/* <CriarConta2/> */} 
        {/* <CriarConta3/> */}
        {/* <Login/>  */}
        {/* <RedefinirSenha1/> */}
        {/* <RedefinirSenha2/> */}
        {/* <RedefinirSenha3/> */}


        
{/* 
        
      </main>
    </div>
  );
} */}

