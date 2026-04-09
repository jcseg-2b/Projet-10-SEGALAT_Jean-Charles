import "../stylepages/user.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/authSlice";
import Account from "../components/Account/Account";

function User() {
  // useSelector : lit le token JWT stocké dans Redux
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  // useSelector : lit les données du profil utilisateur stockées dans Redux
  const user = useSelector((state) => state.auth.user);

  // États locaux pour le formulaire d'édition du nom d'utilisateur
  const [showEdit, setShowEdit] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  // useEffect : se déclenche au montage du composant et à chaque changement de token
  // Récupère le profil utilisateur depuis l'API avec le token comme authentification
  useEffect(() => {
    if (token) {
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Le token JWT est envoyé dans le header pour identifier l'utilisateur
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        // Stocke les données du profil dans Redux
        .then((data) => dispatch(setUser(data.body)));
    }
  }, [token, dispatch]);

  // Met à jour le userName via un appel PUT à l'API
  const handleupateUser = async () => {
    // verifie que le champ n'est pas vide avant d'envoyer la requête
    if (!newUserName.trim()) {
      alert("Le nom d'utilisateur ne peut pas être vide.");
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userName: newUserName,
          }),
        },
      );
      if (response.ok) {
        const data = await response.json();
        // Met à jour les données utilisateur dans Redux avec le nouveau userName
        dispatch(setUser(data.body));
        // Ferme le formulaire d'édition
        setShowEdit(false);
      } else {
        console.error("Failed to update user name");
      }
    } catch (error) {
      console.error("Error updating user name:", error);
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Bienvenu
          <br />
          {/* Affiche le userName uniquement si user est chargé dans Redux */}
          {user && user.userName}
        </h1>
        {/* Affichage conditionnel : formulaire d'édition ou bouton selon showEdit */}
        {showEdit ? (
          <div className="edit-form">
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="Nouveau nom d'utilisateur"
            />
            <button className="edit-button" onClick={handleupateUser}>
              Sauvegarder
            </button>
            <button className="edit-button" onClick={() => setShowEdit(false)}>
              Annuler
            </button>
          </div>
        ) : (
          <button className="edit-button" onClick={() => setShowEdit(true)}>
            Modifier le nom
          </button>
        )}
      </div>

      <h2 className="sr-only">Comptes</h2>
      {/* Composant Account réutilisable pour chaque ligne de compte bancaire */}
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Disponible"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Disponible"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Disponible"
      />
    </main>
  );
}
export default User;
