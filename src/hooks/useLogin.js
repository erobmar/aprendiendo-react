import { useState } from "react";
import { usuarios } from "../data/usuarios";

function UseLogin(){

    const [ cargando, setCargando ] = useState(false);
    const [ error, setError ] = useState('');
    
    async function iniciarSesion (login, password) {
        
        setCargando(true);
        setError('');

        await new Promise(resolve => setTimeout(resolve, 1000));

        const encontrado = usuarios.find(usuario => 
            usuario.login === login && usuario.password === password
        );

        setCargando(false);

        if (!encontrado){
            setError('Usuario o contraseña incorrectos');
            return null;
        }

        return{

            id: encontrado.id,
            nombre: encontrado.nombre

        };

    }

    return { iniciarSesion, cargando, error };

}

export default UseLogin;