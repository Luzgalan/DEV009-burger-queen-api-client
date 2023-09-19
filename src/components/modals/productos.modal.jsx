import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import  PropTypes  from "prop-types"


const ProductosModal = ({type, product, onClose, onSave}) => {

  const [formData, setFormData] = useState({
    nombre: product ? product.nombre : "",
    tipo: product ? product.tipo : "",
    precio: product ? product.precio : 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (type === "Editar") {
      // Lógica para editar el producto
      onSave(product.id, formData);
    } else if (type === "Crear") {
      // Lógica para crear un nuevo producto
      onSave(formData);
    }
    onClose();
  };
    return (
        <div className="bg-dark text-white">
            <Modal.Header  closeButton>
                <Modal.Title>{type} Productos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form   >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="" />
      </Form.Group>
      <FormGroup>
      <Form.Label>Tipo</Form.Label>
      <Form.Control
              as="select"
              name="tipo"
              value={formData.tipo}
              onChange={handleInputChange}
            />
      <Form.Select aria-label="Default select example">
      <option>Tipo </option>
      <option value="1">Desayuno</option>
      <option value="2">Almuerzo</option>
      <option value="2">Resto de día</option>
    </Form.Select>
    </FormGroup>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Precio</Form.Label>
        <Form.Control  type="number"
              name="precio"
              value={formData.precio}
              onChange={handleInputChange}
              placeholder="" />
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
product: PropTypes.object, 
 onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default ProductosModal
