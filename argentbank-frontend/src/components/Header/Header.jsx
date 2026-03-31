import { Link } from "react-router-dom";
import Logo from "../../assets/images/argentBankLogo.webp";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
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
      {token ? (
        <>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {user && user.userName}
          </Link>
          <Link className="main-nav-item" to="/" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Se déconnecter
          </Link>
        </>
      ) : (
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Se connecter
        </Link>
      )}
    </nav>
  );
}
export default Header;
