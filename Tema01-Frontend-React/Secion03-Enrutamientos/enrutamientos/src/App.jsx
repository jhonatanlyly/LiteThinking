//import logo from './logo.svg';
import './App.css';
//import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import Articles from './Components/Articles/Articles/Articles';
import ArticleDetail from './Components/Articles/Articles/ArticleDetail';
import Dashboard from './Components/Navegacion/Dashboard/Dashboard';
import Profile from './Components/Users/Profile/Profile';
import PrivateRoute from './Components/RPrivate/RPrivate/PrivateRoute';
import Login from './Components/Users/Login/Login';


export default function App() {

  return (
    <BrowserRouter>
      <nav>
            <Link to="/">Inicio</Link> |
            <Link to="/about">Acerca</Link> |
            <Link to="/users">Usuarios</Link> |
            <Link to="/Components/Articles/Articles/">Articulos</Link> |
            <Link to="/dashboard">Dashboard</Link> |
            <Link to="/users/johndoe">Perfil de John Doe</Link> |
            <Link to="/admin">Ingreso</Link> |
            <Link to="/login">Login</Link>
      </nav>

      {/* Definimos las rutas de la aplicación */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Users" element={<Users/>} />
        <Route path="*" element={<h2>404 Pagina No encontrada</h2>}></Route>
        <Route path="/Components/Articles/Articles/" element={<Articles/>}>
        {/*Rutas Hijas*/}
            <Route path=":id" element={<ArticleDetail/>}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/users/:username" element={<Profile/>}></Route>
        <Route path="/admin" element={
          <PrivateRoute>
            <PrivateRoute />
          </PrivateRoute>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
};
