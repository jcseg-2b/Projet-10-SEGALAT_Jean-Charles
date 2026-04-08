import { createSlice } from "@reduxjs/toolkit";

// État initial : tout est vide au démarrage de l'application
const initialState = {
  token: null,   // JWT reçu après connexion
  user: null,    // infos du profil utilisateur (firstName, lastName, userName...)
  error: null,   // message d'erreur en cas d'échec
  loading: false, // true pendant une requête API en cours
};

// createSlice génère automatiquement les actions et le reducer en une seule déclaration
const authSlice = createSlice({
  name: "auth", // préfixe des actions (ex: "auth/setToken")
  initialState,
  reducers: {
    // Stocke le token JWT après connexion réussie
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // Stocke les données du profil utilisateur
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Stocke un message d'erreur
    setError: (state, action) => {
      state.error = action.payload;
    },
    // Active/désactive l'indicateur de chargement
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Réinitialise tout le state auth (déconnexion)
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
});

// Export des action creators pour être utilisés dans les composants via dispatch()
export const { setToken, setUser, setError, setLoading, logout } =
  authSlice.actions;

// Export du reducer pour être enregistré dans le store
export default authSlice.reducer;
