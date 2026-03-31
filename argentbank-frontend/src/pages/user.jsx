import "../stylepages/user.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/authSlice";

function User() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log("Token dans User.jsx:", token);
    if (token) {
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => dispatch(setUser(data.body)));
    }
  }, [token, dispatch]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Bienvenu
          <br />
          {user && `${user.firstName} ${user.lastName}`}
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
