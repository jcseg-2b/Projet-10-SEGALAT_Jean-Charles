import "../stylepages/user.css";

function User() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Bienvenu
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Modifier le nom</button>
      </div>
      <h2 className="sr-only">Comptes</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Compte courant (x8349)</h3>
          <p className="account-amount">2,082.79€</p>
          <p className="account-amount-description">Solde disponible</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">Voir les transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Épargne (x6712)</h3>
          <p className="account-amount">10,928.42€</p>
          <p className="account-amount-description">Solde disponible</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">Voir les transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Carte de crédit (x8349)</h3>
          <p className="account-amount">184.30€</p>
          <p className="account-amount-description">Solde actuel</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">Voir les transactions</button>
        </div>
      </section>
    </main>
  );
}
export default User;
