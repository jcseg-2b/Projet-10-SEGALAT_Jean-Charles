import iconChat from "../assets/images/icon-chat.webp";
import iconMoney from "../assets/images/icon-money.webp";
import iconSecurity from "../assets/images/icon-security.webp";
import "../stylepages/home.css";
import "../components/Homecard/homecard.css";
import Homecard from "../components/Homecard/Homecard";
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
        <Homecard
          icon={iconChat}
          alt="Chat Icon"
          className="feature-icon"
          title="Vous êtes notre priorité n°1"
          description="Besoin de parler à un conseiller ? Vous pouvez nous contacter via notre chat disponible 24h/24 ou par téléphone en moins de 5 minutes."
        />

        <Homecard
          icon={iconMoney}
          alt="Money Icon"
          className="feature-icon"
          title="Plus d'épargne signifie de meilleurs taux d'intérêt"
          description="Plus vous épargnez avec nous, plus votre taux d'intérêt sera élevé !"
        />
        <Homecard
          icon={iconSecurity}
          alt="Security Icon"
          className="feature-icon"
          title="Une séccurité en qui vous pouvez avoir confiance"
          description="Nous utilisons un chiffrement de pointe pour garantir que vos données et votre argent sont toujours en sécurité."
        />
      </section>
    </main>
  );
}
export default Home;
