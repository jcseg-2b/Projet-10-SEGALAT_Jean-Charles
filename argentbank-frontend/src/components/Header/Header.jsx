import { Link } from "react-router-dom";
import Logo from "../../assets/images/argentBankLogo.webp";
import "./Header.css";

function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Se connecter
        </Link>
      </div>
    </nav>
  );
}
export default Header;
