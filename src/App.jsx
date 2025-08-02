// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Protected from './components/Protected';
import './App.css';
import LoginPage      from './pages/LoginPage';
import RegistroPage   from './pages/RegistroPage';
import EjerciciosPage    from './pages/EjerciciosPage';
import RutinasPage  from './pages/RutinasPage';
import ProfilePage    from './pages/ProfilePage';
import MisEjerciciosPage   from './pages/MisEjerciciosPage';
import MisFavoritosPage from './pages/MisFavoritosPage';
import MisRutinasPage from './pages/MisRutinasPage';
import EncuestaPage   from './pages/EncuestaPage';
import ConfiguracionPage from './pages/ConfiguracionPage';
function App() {
  return (
    <Routes>
      {/* públicas */}
      <Route path="/ejercicios" element={<EjerciciosPage/>} />
      <Route path="/login"    element={<LoginPage/>} />
      <Route path="/registro" element={<RegistroPage/>} />

      {/* protegidas */}
      <Route path="/encuesta" element={<Protected><EncuestaPage/></Protected>} />
      <Route path="/rutinas" element={<Protected><RutinasPage/></Protected>} />
      <Route path="/misRutinas" element={<Protected><MisRutinasPage/></Protected>} />
      <Route path="/misFavoritos" element={<Protected><MisFavoritosPage/></Protected>} />
      <Route path="/profile"   element={<Protected><ProfilePage/></Protected>} />
      <Route path="/misEjercicios"  element={<Protected><MisEjerciciosPage/></Protected>} />
      <Route path="/configuracion"  element={<Protected><ConfiguracionPage/></Protected>} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/ejercicios" replace/>}/>
    </Routes>
  );
}
export default App;
