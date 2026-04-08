import "../stylepages/login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setError, setLoading } from "../store/authSlice";

function Login() {
  // dispatch : permet d'envoyer des actions au store Redux
  const dispatch = useDispatch();
  // navigate : permet de rediriger vers une autre page
  const navigate = useNavigate();

  // États locaux pour les champs du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    // Empêche le rechargement de la page par défaut du formulaire
    e.preventDefault();

    // Indique qu'une requête est en cours
    dispatch(setLoading(true));

    try {
      // Envoi des identifiants à l'API
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Connexion réussie : on stocke le token JWT dans Redux
        dispatch(setToken(data.body.token));
        // Redirection vers la page profil
        navigate("/user");
      } else {
        alert("Email ou mot de passe incorrect");
      }
    } catch {
      // En cas d'erreur réseau ou serveur
      dispatch(setError("Une erreur est survenue. Veuillez réessayer."));
    } finally {
      // Dans tous les cas, on arrête le chargement
      dispatch(setLoading(false));
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Se connecter</h1>
        {/* onSubmit déclenche handleSubmit à la soumission du formulaire */}
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Email</label>
            {/* Input contrôlé : sa valeur est liée à l'état local "email" */}
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Mot de passe</label>
            {/* Input contrôlé : sa valeur est liée à l'état local "password" */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Se souvenir de moi</label>
          </div>
          <button type="submit" className="sign-in-button">
            Se connecter
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
