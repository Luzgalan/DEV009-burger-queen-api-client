import 'bootstrap/dist/css/bootstrap.min.css';


function LoginLayout() {
 
  return (
    <div className='Background-Login'>
      <img src='..\src\assets\Diseño sin título (2).png'></img>
      <div className="parte-izquierda">
        <img src="..\src\assets\pexels-valeria-boltneva-1199956.jpg" alt="Logo de la empresa" />
      </div>
     <div className="parte-derecha">
        <img src="..\src\assets\Burguer__2_-removebg-preview.png" alt="Logo de la empresa" />
      
      <h2>Bienvenido de nuevo!</h2>
      <form action="procesar_login.php" method="POST" className="form-group1"> 
        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico:</label> <br></br>
          <input type="email" id="correo" name="correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label> <br></br>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      </div>
    </div>
  );
}

export default LoginLayout
