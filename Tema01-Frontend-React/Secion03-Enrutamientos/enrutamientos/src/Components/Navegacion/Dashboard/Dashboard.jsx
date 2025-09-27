import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    //Definimos el hook useNavigate
    const navigate = useNavigate();

    return (
        <div>
            <h2>Panel de Control</h2>
            {/*Navegacion Programatica */}
            <button onClick={() => navigate("/")}>Ir al Inicio</button>
        </div>
    );
}