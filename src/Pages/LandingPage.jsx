import { Link } from "react-router-dom";
import "../App.css";
const LandingPage = () => {
    
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
    <main>
    <h1 className="heading-h1">
      Mitt examensarbete
    </h1>
    <h3 className="heading-h2">Seo & Tillgänglighet</h3>
    <p className="heading-p">
      Henry Cantwell - Fend 21
    </p>
    </main>
    </>
  );
};

export default LandingPage;
