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
    </>
  );
};

export default LandingPage;
