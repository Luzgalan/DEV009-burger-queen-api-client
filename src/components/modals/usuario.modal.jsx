import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import  PropTypes  from "prop-types"


const UsuarioModal = ({type}) => {
    return (
        <div className="bg-dark text-white">
            <Modal.Header closeButton>
                <Modal.Title>{type} Usuarios</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form   >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <FormGroup>
      <Form.Label>Puesto</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Tipo </option>
      <option value="1">Chef</option>
      <option value="2">Administrador</option>
      <option value="3">Mesero</option>
    </Form.Select>
    </FormGroup>
      </Form>
            </Modal.Body>
            <Modal.Footer>
            {type === "Editar" ? (
          <Button variant="success">Editar usuario</Button>
        ) : (
          <Button variant="success">Crear usuario</Button>
          
        )}
        </Modal.Footer>

        </div>
    );
}
UsuarioModal.propTypes ={
    type:PropTypes.string.isRequired
}

export default UsuarioModal
