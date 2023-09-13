import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import  PropTypes  from "prop-types"


const ProductosModal = ({type}) => {
    return (
        <div className="bg-dark text-white">
            <Modal.Header  closeButton>
                <Modal.Title>{type} Productos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form   >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <FormGroup>
      <Form.Label>Tipo</Form.Label>

      <Form.Select aria-label="Default select example">
      <option>Tipo </option>
      <option value="1">Desayuno</option>
      <option value="2">Resto del dia</option>
    </Form.Select>
    </FormGroup>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="" />
      </Form.Group>
    </Form>
            </Modal.Body>
            <Modal.Footer>
            {type === "Editar" ? (
          <Button variant="success">Editar Producto</Button>
        ) : (
          <Button variant="success">Crear Producto</Button>
        )}
        </Modal.Footer>

        </div>
    );
}
ProductosModal.propTypes ={
    type:PropTypes.string.isRequired
}

export default ProductosModal
