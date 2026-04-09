import "../stylepages/error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="error-container">
        <h1 className="errortitle">404</h1>
        <h2 className="errortext">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/" className="error-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
}

export default Error;
