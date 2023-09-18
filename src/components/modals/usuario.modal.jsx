import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import  PropTypes  from "prop-types"
import { useState } from "react";




const UsuarioModal = ({type}) => {
    // declaracion de una constante para acceder al dom de name 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tipo, setTipo] = useState("");

console.log(type)


    const save = (e)=> {
    e.preventDefault();
  const objeto ={
    "email": email,
    "password": '1234',
    "role": tipo,
    "name":name
  }
console.log(objeto)
    }


   
    return (
        <div className="bg-dark text-white">
             <Form  onSubmit={save} >
            <Modal.Header closeButton>
                <Modal.Title>{type} Usuarios</Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder=""  value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder=""  value={email} onChange={(e) =>  setEmail(e.target.value)} />
      </Form.Group>
      <FormGroup>
      <Form.Label>Puesto</Form.Label>
      <Form.Select aria-label="Select de tipos"  name="role"  value={tipo} onChange={(e) =>  setTipo(e.target.value) }>
      <option>Tipo </option>
      <option value="1">Chef</option>
      <option value="2">Administrador</option>
      <option value="3">Mesero</option>
    </Form.Select>
    </FormGroup>
      
            </Modal.Body>
            <Modal.Footer>
            {type === "Editar" ? (
          <Button variant="success">Editar usuario</Button>
        ) : (
          <Button variant="success" type="submit" >Crear usuario</Button>
          
        )}
        </Modal.Footer>
        </Form>

        </div>
    );
}
UsuarioModal.propTypes ={
    type:PropTypes.string.isRequired
}

export default UsuarioModal
