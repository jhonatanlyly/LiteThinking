import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const isAuth= false; // Cambia esto según tu lógica de autenticación
    return isAuth ? children : <Navigate to="/" />;
}