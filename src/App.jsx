// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Protected from "./components/Protected";

import LoginPage from "./pages/LoginPage";
import RutinasPage from "./pages/RutinasPage";
import ExercisesPage from "./pages/ExercisesPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import MisFavoritosPage from "./pages/MisFavoritosPage";
import MisRutinasPage from "./pages/MisRutinasPage";
import EncuestaPage from "./pages/EncuestaPage";
import RegistroPage from "./pages/RegistroPage";

function App() {
  return (
    <Routes>
      {/* rutas públicas */}
      <Route path="/workouts" element={<RutinasPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegistroPage />} />

      <Route path="/exercises" element={<ExercisesPage />} />
      {/* rutas protegidas */}
      <Route
        path="/misFavoritos"
        element={
          <Protected>
            <MisFavoritosPage />
          </Protected>
        }
      />
      <Route
        path="/misRutinas"
        element={
          <Protected>
            <MisRutinasPage />
          </Protected>
        }
      />
      {/* <Route path="/workouts"    element={<Protected><WorkoutsPage /></Protected>} /> */}
      <Route
        path="/encuesta"
        element={
          <Protected>
            <EncuestaPage />
          </Protected>
        }
      />
      {/* <Route path="/exercises"   element={<Protected><ExercisesPage /></Protected>} /> */}
      <Route
        path="/profile"
        element={
          <Protected>
            <ProfilePage />
          </Protected>
        }
      />
      <Route
        path="/settings"
        element={
          <Protected>
            <SettingsPage />
          </Protected>
        }
      />
      {/* fallback */}
      <Route path="*" element={<Navigate to="/workouts" replace />} />
    </Routes>
  );
}
export default App;
