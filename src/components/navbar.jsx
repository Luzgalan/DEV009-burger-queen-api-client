import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarComponent = () => {
    return (
        <div className="backgroundNavbar">
            <header className="header">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-warning fs-2" aria-current="page" href="/admin/usuarios">Usuarios</a>
                        </li>
                        <li className="nav-item "> 
                            <a className="nav-link text-white fs-2 " href="/admin/productos">Productos </a>
                        </li>
                    </ul>
                </div>
            </nav> */}
    <Navbar expand="lg" className="bg-body-tertiary navbar-dark">
      <Container>
        <Navbar.Brand >Burquer Queen</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse    id="basic-navbar-nav">
          <Nav  className="ms-auto">
          <Nav.Link as={NavLink} to="/admin/usuarios  " >Usuarios</Nav.Link> 
          <Nav.Link as={NavLink} to="/admin/productos  " >Productos</Nav.Link> 
            {/* <Nav.Link  to="/admin/personas" className={({isActive})=> isActive ? "active" : ""}>            </Nav.Link>
            <Nav.Link  to="/admin/productos">Productos</Nav.Link> */}

             {/* <Nav.Link  >    */}
            
            {/* </Nav.Link> */}
            {/* <Nav.Link  >    */}
           
            {/* </Nav.Link> */}
            {/* <Nav.Link  to="/admin/productos">Productos</Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </header>
        </div>
    )
}

export default NavbarComponent
