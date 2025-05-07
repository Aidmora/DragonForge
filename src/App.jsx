// src/App.jsx
import {Routes, Route, Navigate } from 'react-router-dom';
import Protected from './components/Protected';

import LoginPage      from './pages/LoginPage';
import WorkoutsPage   from './pages/WorkoutsPage';
import ExercisesPage  from './pages/ExercisesPage';
import ProfilePage    from './pages/ProfilePage';
import Encuesta       from   './pages/Encuesta'; 
import SettingsPage   from './pages/SettingsPage';
import MisRutinas     from './pages/MisRutinas';
import MisFavoritos   from './pages/MisFavoritos';

function App() {
  return (
    <Routes>
          {/* rutas públicas */}
          <Route path="/login"       element={<LoginPage/>} />

          {/* rutas protegidas */}
          <Route path="/misFavoritos" element={<Protected><MisFavoritos /></Protected>} />
          <Route path="/misRutinas"  element={<Protected><MisRutinas /></Protected>} />
          <Route path="/workouts"    element={<Protected><WorkoutsPage /></Protected>} />
          <Route path="/encuesta"    element={<Protected><Encuesta /></Protected>} />
          <Route path="/exercises"   element={<Protected><ExercisesPage /></Protected>} />
          <Route path="/profile"     element={<Protected><ProfilePage /></Protected>} />
          <Route path="/settings"    element={<Protected><SettingsPage /></Protected>} />

          {/* fallback */}
          <Route path="*"             element={<Navigate to="/login" replace />} />
      </Routes>
  );
}
export default App;
