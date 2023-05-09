import { Link } from "react-router-dom";
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
      <div className="container-enviornment">
        <div className="enviornment-wrapper">
          <h1>Miljö och hållbarhet</h1>
          <div className="enviornment-hero">
            <h2>Människor och relationer i fokus</h2>
            <p>
              Shaya Solutions grundades 2016 med fokus att hjälpa personer, som
              trots djup utbildning och akademisk teknisk kompetens ej fick ett
              arbete eller konsultuppdrag.
              <br /> <br /> Detta härleddes ofta till okunskap och bristande
              kännedom om hur man bemöter, förvaltar och utvecklar kompetens,
              kunskap och talanger. Verksamheten har sedan oktober 2018 breddats
              till att omfatta hela arbetsmarknaden.{" "}
            </p>
          </div>

          <div className="enviornment-content-wrapper">
            {" "}
            <h2>Miljö och arbete går hand i hand</h2>
            <div className="underline-small"></div>
            <p>
              Vid FN:s toppmöte den 25 september 2015 antog världens stats-och
              regeringschefer 17 globala mål och Agenda 2030 för hållbar
              utveckling. Världens länder har åtagit sig att från och med den 1
              januari 2016 fram till år 2030 leda världen mot en hållbar och
              rättvis framtid. Vi har valt att konstruera vårt miljö-och
              hållbarhetsarbete utifrån Shaya Solutions verksamhet där vi har
              möjlighet att påverka.
            </p>
            <span>
              Vill du veta mer om hur vi jobbar med miljö och hållbarhet? Läs
              texten i sin helhet.
            </span>
            <a
              href="https://onedrive.live.com/?authkey=%21AE927R1sMdojc%2Ds&cid=8DE706180B3577D6&id=8DE706180B3577D6%217669&parId=8DE706180B3577D6%216122&o=OneUp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-envior"
            >
              Läs mer
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
