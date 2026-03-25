import iconChat from "../assets/images/icon-chat.webp";
import iconMoney from "../assets/images/icon-money.webp";
import iconSecurity from "../assets/images/icon-security.webp";
import "../stylepages/home.css";

function Home() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">Aucun frais.</p>
          <p className="subtitle">Aucun dépôt minimum.</p>
          <p className="subtitle">Taux d'intérêt élevés.</p>
          <p className="text">
            Ouvrez un compte d'épargne chez Argent Bank dès aujourd'hui !
          </p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <div className="feature-item">
          <img src={iconChat} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">Vous étes notre priorité #1</h3>
          <p>
            Besoin de parler à un représentant ? Vous pouvez nous contacter via
            notre chat disponible 24 h/24 et 7 j/7 ou par téléphone en moins de
            5 minutes.
          </p>
        </div>
        <div className="feature-item">
          <img src={iconMoney} alt="Money Icon" className="feature-icon" />
          <h3 className="feature-item-title">
            Des économies supplémentaires impliquent des taux plus élevés
          </h3>
          <p>
            Plus vous épargnez avec nous, plus votre taux d'intérêt sera élevé !
          </p>
        </div>
        <div className="feature-item">
          <img
            src={iconSecurity}
            alt="Security Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">
            Une sécurité digne de confiance
          </h3>
          <p>
            Nous utilisons une encryption de pointe pour nous assurer que vos
            données et votre argent soient toujours en sécurité.
          </p>
        </div>
      </section>
    </main>
  );
}
export default Home;
