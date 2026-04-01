import "../stylepages/user.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/authSlice";
import Account from "../components/Account/Account";

function User() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [showEdit, setShowEdit] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
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

  const handleupateUser = async () => {
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
        dispatch(setUser(data.body));
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
          {user && user.userName}
        </h1>
        {showEdit ? (
          <div>
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
