import React, { useState } from "react";
import "../Hojas-de-estilo/login.css";
import { auth } from "../componentes/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

/*definimos la función que nos ayudará a logearnos */
function Login({ onLoginSuccess }) {
  /*definimos los estados */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  /*Manejo de inicio de sesión */
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        //usamos la función de firebase para autenticarnos
        auth,
        email,
        password
      );
      /*si todo salió bien ejecuta el callback onLoginSuccess con el usuario. */
      onLoginSuccess(userCredential.user);
      alert("Bienvenido");
    } catch (err) {
      setError(err.message); // Si hay un error, lo captura y lo muestra en el estado error.
    }
  };
  //Manejamos el registro de un usuario nuevo
  const handleRegister = async () => {
    try {
      //con la función de firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Si el registro es exitoso, ejecuta el callback onLoginSuccess con el nuevo usuario.
      onLoginSuccess(userCredential.user);
      alert("Usuario registrado correctamente");
    } catch (err) {
      setError(err.message); // Si hay un error, lo captura y lo muestra en el estado error.
    }
  };
  //retornamos el login y sus inputs
  return (
    <div
      className="card rounded-5 container mt-5"
      style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}
    >
      <h2>Iniciar sesión</h2>
      <input
        className="form-control shadow-sm"
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)} //actualizamos el estado cuando cambia el valor
        style={{ display: "block", width: "100%", marginBottom: "1rem" }} //aplicamos estilos con el ancho del 100%
      />
      <input
        className="form-control shadow-sm"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "1rem" }}
      />
      <button
        className="btn btn-primary w-100"
        onClick={isRegistering ? handleRegister : handleLogin} // si estamos en el modo de registro, ejecuta handleRegister, sino, handleLogin.
        style={{ width: "100%", marginBottom: "1rem" }}
        //Cambia el texto del botón dependiendo del estado isRegistering.
      >
        {isRegistering ? "Registrarse" : "Entrar"}
      </button>
      <button
        className="btn btn-primary w-100"
        onClick={() => setIsRegistering(!isRegistering)} // Cambia el estado isRegistering al hacer clic en el botón.
        style={{ width: "100%" }}
      >
        {isRegistering
          ? "¿Ya tienes cuenta? Iniciar sesión" // Si está en el modo de registro, cambia el texto para ofrecer iniciar sesión.
          : "¿No tienes cuenta? Registrarse"}
      </button>
      {error && ( // Si hay un error, muestra el mensaje de error en color rojo.
        <p style={{ color: "red", marginTop: "1rem" }}>Error: {error}</p>
      )}
    </div>
  );
}

export default Login;
