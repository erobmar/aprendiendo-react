import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import useLogin from '../hooks/useLogin';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { setUsuario } = useContext(AuthContext);
  const { iniciarSesion, cargando, error } = useLogin();

  const ubicacion = useLocation();
  const navegar = useNavigate();

  async function enviar(evento) {
    evento.preventDefault();

    const usuario = await iniciarSesion(login, password);

    if (usuario) {
      setUsuario(usuario);

      const desde = ubicacion.state?.desde;
      const destino = desde
        ? `${desde.pathname}${desde.search}${desde.hash}`
        : '/perfil';

      navegar(destino, { replace: true });
    }
  }

  return (
    <section>
      <h2>Iniciar sesión</h2>

      <form onSubmit={enviar}>
        <label htmlFor="login">Usuario</label>
        <input
          id="login"
          autoComplete="username"
          value={login}
          onChange={evento => setLogin(evento.target.value)}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={evento => setPassword(evento.target.value)}
          required
        />

        {error && <p role="alert">{error}</p>}

        <button type="submit" disabled={cargando}>
          {cargando ? 'Comprobando…' : 'Entrar'}
        </button>
      </form>
    </section>
  );
}

export default Login;