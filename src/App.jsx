import "./App.css";
import banner2 from "./assets/images/banner2.png";

function App() {
    return (
        <>
            <header>
                <h1>Pelos e Garras Feridas</h1>
                <h2>-Protetores de piripiri-</h2>
                <p>Um olhar profundo sobre os maus-tratos aos animais</p>
            </header>

            <section className="hero">
                <img src={banner2} alt="Banner2" className="hero-image" />
            </section>

            <section className="about">
                <h2>Sobre o Documentário</h2>
                <p>
                    Pelos e Garras Feridas é um site informativo vinculado a um
                    projeto de extensão do IFPI – Campus Piripiri, que leva o
                    mesmo nome. O objetivo do projeto é informar e conscientizar
                    sobre a dura realidade enfrentada por animais abandonados e
                    maltratados na cidade de Piripiri. Por meio de um
                    documentário, apresentamos essa situação, infelizmente ainda
                    recorrente, trazendo imagens do abrigo e um trailer
                    exclusivo. O grupo responsável pelo projeto foi dividido em
                    setores, com alguns membros atuando na parte logística e
                    outros na pesquisa de campo. Cada integrante contribuiu de
                    forma significativa nas diversas etapas: programação,
                    entrevistas, edição de vídeo e áudio, filmagens, elaboração
                    do roteiro, relatórios, design e apresentação de slides. Um
                    cronograma foi elaborado para monitorar e registrar o
                    progresso do projeto. O relatório final ainda está em fase
                    de produção, mas será publicado em breve. O documentário
                    principal será disponibilizado no YouTube e contará com uma
                    entrevista especial com a moradora e responsável pelo
                    abrigo, Dona Socorro, que vive no bairro Prado. Para essa
                    entrevista, foi elaborado um questionário com 18 perguntas
                    específicas. Para mais informações, deixaremos o link do
                    vídeo completo, que leva diretamente ao YouTube.
                </p>
            </section>

            <section className="call-to-action">
                <h2>Assista agora</h2>
                <a
                    href="https://youtu.be/5pWjOClrXvc?si=WBIFTtQyP96JM5G-"
                    target="_blank"
                    className="watch-button"
                >
                    Assistir ao Trailer
                </a>
            </section>

            <section className="call-to-action">
                <h2>Assista o vídeo</h2>
                <div className="video-wrapper">
                    <iframe
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/T9LP7IZwiUA?si=-B-6Akov6vBLrWqd"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <footer>
                <p>
                    &copy; 2025 Garras e Pelos Feridos | Todos os direitos
                    reservados.
                </p>

                <section>
                    <h3>Contribua com uma doação</h3>
                    <p>
                        <strong>Chave Pix:</strong>{" "}
                        socorroprotetorapiaui@gmail.com
                    </p>
                </section>

                <section>
                    <h3>Siga nossas redes sociais</h3>
                    <p>
                        <a
                            className="botao-instagram"
                            href="https://www.instagram.com/protetoresdepiripiri?utm_source=qr&igsh=MTI2NzF0NHhxbXdwaw=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-instagram"></i>{" "}
                            @protetoresdepiripiri
                        </a>
                    </p>
                </section>
            </footer>
        </>
    );
}

export default App;
