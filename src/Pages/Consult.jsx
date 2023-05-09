import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Consult.css"

const Consult = () => {
  // Funktionen körs när komponenten mountas (visas för första gången)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <>
       {/*  Header */}
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
      {/* Container för konsultsidan */}
      <main className="container-consult">
        {/* Container för konsultinnehållet */}
        <section className="consult-content-container">
          <div className="hero-wrapper">
            {/* Huvudrubrik */}
            <h1>Utveckla din erfarenhet tillsammans med oss</h1>
            {/* Beskrivande text */}
            <p className="hero-text">
              Söker du intressanta, utvecklande och långa uppdrag? Söker du
              anställning eller är du egenföretagare? Vi är en konsult- och
              kompetenspartner med specialisering inom IT, Management och Teknik
              där människor och relationer står i centrum. Du har möjlighet att
              sammarbeta med oss antingen som underkonsult eller som anställd
              konsult. Fokus ligger alltid på intressanta projekt,
              meningsfullhet och samhällsnytta.
            </p>
          </div>
          {/* Underrubrik */}
          <h2>Process</h2>
          {/* Wrapper för processboxarna */}
          <section className="process-wrapper">
            {/* Box 1 */}
            <article className="process-box">
              <span>I</span>
              <p>Hitta ett uppdrag och skicka in din ansökan</p>
            </article>
            {/* Box 2 */}
            <article className="process-box">
              <span className="mar-r">II</span>
              <p>Vi granskar din ansökan</p>
            </article>
            {/* Box 3 */}
            <article className="process-box">
              <span className="mar-l">III</span>
              <p>
                Vid ömsesidig matchning kommer du vidare i vår interna process
              </p>
            </article>
            {/* Box 4 */}
            <article className="process-box">
              <span className="mar-r">IV</span>
              <p>Vi ger dig besked oavsätt negativt eller positivt utfall</p>
            </article>
          </section>
          {/* Länk till lediga uppdrag */}
          <a
            className="btn-blue"
            href="https://career.shayasolutions.com/#section-jobs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lediga uppdrag
          </a>
        </section>
      </main>
    </>
  );
};

export default Consult;
