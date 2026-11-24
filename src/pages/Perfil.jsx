import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Perfil(){

    const { usuario } = useContext(AuthContext);

    return <h2>Perfil de {usuario.nombre}</h2>;

}

export default Perfil;