//import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import { useState } from "react";

function LoginLayout() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar credenciales al servidor mock API
    const response = await fetch('https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0#/auth/getToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Si la respuesta es exitosa, asumimos que el usuario está autenticado
      const data = await response.json();

      // Almacenar el token en el estado o en las cookies/local storage
      const token = data.token;

      // Redirigir al usuario a la página protegida o realizar otras acciones
    } else {
      // Manejar errores de autenticación, como credenciales incorrectas
    }
  };
 
  return (
    <div className='Background-Login'>
      <img src='..\src\assets\Diseño sin título (2).png'></img>
      <div className="parte-izquierda">
        <img src="..\src\assets\pexels-valeria-boltneva-1199956.jpg" alt="Logo de la empresa" />
      </div>
     <div className="parte-derecha">
        <img src="..\src\assets\Burguer__2_-removebg-preview.png" alt="Logo de la empresa" />
      
      <h2>Bienvenido de nuevo!</h2>
      <form onSubmit={handleSubmit} action="procesar_login.php" method="POST" className="form-group1"> 
        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico:</label> <br></br>
          <input  type="email"
          id="correo"
          name="correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label> <br></br>
          <input type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      </div>
    </div>
  );
}

export default LoginLayout
