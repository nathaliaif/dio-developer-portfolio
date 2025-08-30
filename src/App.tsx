import { useEffect, useState } from "react";
import "./App.css";
import { ChevronUp } from "lucide-react";

function App() {
  const [changeBackground, setChangeBackground] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Navbar Background Change
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBackground);
    return () => {
      window.removeEventListener("scroll", changeNavbarBackground);
    };
  }, []);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setChangeBackground(true);
    } else {
      setChangeBackground(false);
    }
  };

  // Theme Toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const changeNavbarBackground = () => {
      setChangeBackground(window.scrollY >= 80);
    };
    window.addEventListener("scroll", changeNavbarBackground);
    return () => window.removeEventListener("scroll", changeNavbarBackground);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <nav
        id="nav"
        className={changeBackground ? "navbar active" : "navbar"}
      ></nav>
      <header id="header">
        <h1 className="logo-nome">
          <span className="logo-nathalia">Nathalia</span>
          <p className="logo-irokawa serif">Irokawa</p>
        </h1>
        <p className="header__subtitle">
          <span>
            front-<span className="serif">end</span>
          </span>
          <div className="header__subtitle__line"></div>
          <span>design</span>
        </p>
      </header>

      <section id="about">
        <h2 className="section__title">
          Sobre <p className="serif">mim</p>
        </h2>
        <div className="about-section__text-container">
          <p className="section__subtitle">
            Profissional em transição para front-end, com base em informática e
            experiência em design.
          </p>
          <p className="text-right">
            <div></div>
            De técnica em informática a designer curiosa, redescobri minha
            paixão por tecnologia e hoje estou focada em criar interfaces
            bonitas e funcionais com front-end.
          </p>
          <div className="main-text">
            Minha jornada começou com técnico em informática, mas como sempre
            gostei de explorar meu lado criativo, acabei indo para o design.
            <p>
              Trabalhei com times criativos e aprendi muito sobre estética,
              usabilidade e experiência do usuário, mas a curiosidade pela
              tecnologia nunca foi embora. Aos poucos, redescobri minha paixão
              por desenvolvimento e hoje estou em transição de carreira para o
              front-end.
            </p>
            <p>
              Tenho me dedicado a cursos, bootcamps e uma pós-graduação em
              Engenharia Front-end, unindo a lógica do código com o olhar
              estético que trago do design.
            </p>
          </div>
        </div>

        <div className="list-container">
          <p className="list-title">Educação</p>
          <ol className="list">
            <li>
              01
              <span>Pós-graduação - Front-end Engineering</span>
              <span>FIAP</span>
            </li>
            <li>
              02
              <span>Tecnólogo - Design Gráfico</span>
              <span>Anhembi Morumbi</span>
            </li>
            <li>
              03
              <span>Ensino Médio Técnico - Informática</span>
              <span>FIAP School</span>
            </li>
          </ol>
        </div>
        <div className="list-container">
          <p className="list-title">Certificações</p>
          <ol className="list">
            <li>
              01
              <span>Desenvolvimento Front-End: HTML, CSS e JS</span>
              <span>ALURA</span>
            </li>
            <li>
              02
              <span>NLW Journey - Reactjs</span>
              <span>Rocketseat</span>
            </li>
            <li>
              03
              <span>HTML e CSS para projetos Web</span>
              <span>Alura</span>
            </li>
            <li>
              04
              <span>Imersão Front-end</span>
              <span>Alura</span>
            </li>
            <li>
              05
              <span>NLW Expert - React</span>
              <span>Rocketseat</span>
            </li>
            <li>
              06
              <span>User Experience</span>
              <span>FIAP</span>
            </li>
            <li>
              07
              <span>Agile Framework</span>
              <span>FIAP</span>
            </li>
          </ol>
        </div>
        <div className="list-container">
          <p className="list-title">Tecnologias</p>
          <ol className="list">
            <li>
              01
              <span>HTML</span>
            </li>
            <li>
              02
              <span>CSS</span>
            </li>
            <li>
              03
              <span>JavaScript</span>
            </li>
            <li>
              04
              <span>React</span>
            </li>
            <li>
              05
              <span>Next.js</span>
            </li>
            <li>
              06
              <span>Typescript</span>
            </li>
          </ol>
        </div>
      </section>

      <section id="projects">
        <h2 className="section__title">
          Meus <p className="serif">projetos</p>
        </h2>
        <ul className="projects-list">
          <li>
            <div className="projects-list__left-container">
              <div className="projects-list__text-container">
                <h4>Tech Challenge</h4>
                <p>
                  Projeto desenvolvido para a Pós-Tech de Front-end Engineering
                  da FIAP de um Dashboard Financeiro.
                </p>
                <div>
                  <span>Tecnologias</span>
                  <span>Next.js, Amazon S3</span>
                </div>
              </div>
              <a href="">Github</a>
            </div>
            <img
              className="projects-list__image"
              src="/tech-challenge.png"
              alt=""
            />
          </li>
          <li>
            <div className="projects-list__left-container">
              <div className="projects-list__text-container">
                <h4>REST Countries API</h4>
                <p>
                  Solução do Challenge de listagem de países do Frontend Mentor.
                </p>
                <div>
                  <span>Tecnologias</span>
                  <span>React, HTML, CSS, JavaScript</span>
                </div>
              </div>
              <a href="https://github.com/nathaliaif/rest-countries-api-react">
                Github
              </a>
            </div>
            <img
              className="projects-list__image"
              src="/rest-countries.png"
              alt=""
            />
          </li>
          <li>
            <div className="projects-list__left-container">
              <div className="projects-list__text-container">
                <h4>Rock, Paper & Scissors</h4>
                <p>
                  Solução do Challenge de pedra, papel e tesoura do Frontend
                  Mentor.
                </p>
                <div>
                  <span>Tecnologias</span>
                  <span>React, HTML, CSS, JavaScript</span>
                </div>
              </div>
              <a href="https://github.com/nathaliaif/rock-paper-scissors-react">
                Github
              </a>
            </div>
            <img
              className="projects-list__image"
              src="/rock-paper-scissors.png"
              alt=""
            />
          </li>
        </ul>
      </section>
      <footer id="contact">
        <h2 className="section__title">
          entre em <p className="serif">contato</p>
        </h2>
        <div>
          <div>
            Sinta-se à vontade para entrar em contato!
            <p className="footer__email">nathalia.iro.fernandes@gmail.com</p>
          </div>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/nathaliairokawa/">LinkedIn</a>
            <a href="https://github.com/nathaliaif">GitHub</a>
          </div>
        </div>
        <div className="footer__copyright-container">
          <span>Copyright © Nathalia Irokawa 2025</span>
          <a href="#header">
            <ChevronUp className="move-up-icon" /> Voltar para o topo
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
