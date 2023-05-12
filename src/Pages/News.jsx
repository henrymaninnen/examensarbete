import { Link } from "react-router-dom";
import "./News.css";

import LazyLoad from "react-lazy-load";

import shayaXmindler from "../Images/shayaXmindler.png";
import shayaArsredovisning from "../Images/shayaArsredovisning.png";
import ShayaPaResturang from "../Images/ShayaPaResturang.jpg";
import techArenanSummit from "../Images/techArenanSummit.jpeg";
import UppsalaUniversitet from "../Images/UppsalaUniversitet.jpeg";
import ConvendumKontor from "../Images/ConvendumKontor.jpg";

const News = () => {
  return (
    <>
      {/*  Header/Nav */}
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/konsult"}>Konsulter</Link>
            </li>
            <li>
              <Link to={"/nyheter"}>Nyheter</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/*  Wrapper för allt innehåll på nyhetssidan */}
      <main className="News-Main">
        {/*  Wrapper för nyhets sektionen */}
        <section>
          {/* Varje enskild nyhet */}

          <article>
            <img
              src={shayaXmindler}
              alt="Bild på att Shaya solutions har skrivit avtal med Mindler"
            ></img>
            <p className="article-text">
              Shaya Solutions har skrivit avtal med Mindler
            </p>
            <a>Läs mer om nyheten</a>
          </article>

          <article>
            <img
              src={shayaArsredovisning}
              alt="Bild på vad Shaya solutions gör och hur de gör det"
            ></img>
            <p className="article-text">
              Sammanfattning av årsredovisning för 2021
            </p>
            <a>Läs mer om nyheten</a>
          </article>

          <article>
            <img
              src={UppsalaUniversitet}
              alt="Bild på att Ångströmlaboratoriet/Uppsala Universitet<"
            ></img>
            <p className="article-text">
              Ett kärt återseende av Ångströmlaboratoriet och Uppsala
              Universitet
            </p>
            <a>Läs mer om nyheten</a>
          </article>

          <article>
            <img
              src={ConvendumKontor}
              alt="Bild på kollegor på Shaya solutions kontor"
            ></img>
            <p className="article-text">Event på vårt fantastiska konto</p>
            <a>Läs mer om nyheten</a>
          </article>

          <article>
            <img
              src={ShayaPaResturang}
              alt="Bild på när teamet på Shaya solutions äter på en resturang"
            ></img>
            <p className="article-text">
              VR aktivitet för teamet på Shaya Solutions
            </p>
            <a>Läs mer om nyheten</a>
          </article>

          <article>
            <img
              src={techArenanSummit}
              alt="Bild på när Shaya Solutions var närvarade på Techarenan Summit"
            ></img>
            <p className="article-text">
              Shaya Solutions närvarade på Techarenan Summit
            </p>
            <a>Läs mer om nyheten</a>
          </article>
        </section>
      </main>
    </>
  );
};

export default News;
