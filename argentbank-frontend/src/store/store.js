import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

// Création du store Redux global : point central de stockage de l'état de l'application
const store = configureStore({
  reducer: {
    // La clé "auth" définit le nom de la tranche dans le state global
    // Accessible via : useSelector(state => state.auth.token)
    auth: authReducer,
  },
});

export default store;
