import './App.css'
import banner from './assets/images/banner.jpeg';

function App() {
  return (
    <>
      <header>
        <h1>Pelos e Garras Feridas</h1>
        <p>Um olhar profundo sobre os maus-tratos aos animais</p>
      </header>

      <section className="hero">

        <img src={banner} alt="Banner" className="hero-image" />

      </section>

      <section className="about">
        <h2>Sobre o Documentário</h2>
        <p>
         Pelos e Garras Feridas é um site informativo vinculado a um projeto de extensão do IFPI – Campus Piripiri, que leva o mesmo nome. O objetivo do projeto é informar e conscientizar sobre a dura realidade enfrentada por animais abandonados e maltratados na cidade de Piripiri. Por meio de um documentário, apresentamos essa situação, infelizmente ainda recorrente, trazendo imagens do abrigo e um trailer exclusivo.
         O grupo responsável pelo projeto foi dividido em setores, com alguns membros atuando na parte logística e outros na pesquisa de campo. Cada integrante contribuiu de forma significativa nas diversas etapas: programação, entrevistas, edição de vídeo e áudio, filmagens, elaboração do roteiro, relatórios, design e apresentação de slides.
         Um cronograma foi elaborado para monitorar e registrar o progresso do projeto. O relatório final ainda está em fase de produção, mas será publicado em breve.
         O documentário principal será disponibilizado no YouTube e contará com uma entrevista especial com a moradora e responsável pelo abrigo, Dona Socorro, que vive no bairro Prado. Para essa entrevista, foi elaborado um questionário com 18 perguntas específicas.
         Para mais informações, deixaremos o link do vídeo completo, que leva diretamente ao YouTube.
        </p>
      </section>

      <section className="call-to-action">
        <h2>Assista agora</h2>
        <a 
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
          target="_blank" 
          className="watch-button"
        >
          Assistir ao Trailer
        </a>
      </section>

      <footer>
        <p>© 2025 Pelos e Garras Feridas | Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App
