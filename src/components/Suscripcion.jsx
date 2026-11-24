import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Suscripcion(){

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const navegar = useNavigate();

    function enviarSuscripcion(evento){
        evento.preventDefault();

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido){
            setError('Introduce un email válido');
            return;
        }

        console.log('Correo a suscribir: ', email);
        setError('');
        setEmail('');
        navegar('/');
    }

    


    return (
        <section>
            <h2>Suscripción</h2>

            <form onSubmit={enviarSuscripcion} noValidate>
              <label htmlFor="email">Correo electrónico</label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={evento => setEmail(evento.target.value)}
              />
              {error && <p role="alert">{error}</p>}
              <button type="submit">Suscribirme</button>
            </form>
            <p>Correo introducido: {email}</p>
        </section>
    )
}

export default Suscripcion



