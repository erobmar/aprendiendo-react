import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function RutaPrivada(props){

    const { usuario } = useContext(AuthContext);
    const ubicacion  = useLocation();

    if (!usuario){

        return(
            <Navigate to="/login" replace state={{ desde: ubicacion }}/>
        );

    }

    return props.children;

}


export default RutaPrivada;