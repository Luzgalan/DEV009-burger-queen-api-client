import { Button, Table , Modal } from "react-bootstrap";
import  PropTypes  from "prop-types"

const OrdenarModal = ({type}) => {
    return (
        <div className="bg-dark text-white">
            <Modal.Header closeButton >
                <Modal.Title>{type} Pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <Table striped  hover>
      <thead>
        <tr>
          <th>Producto </th>
          <th>Cantidad</th>
          <th >Precio</th>
          <th ></th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>Sandwich de jamon</td>
          <td>  <span className="fa fa-circle-plus fa-lg" style={{color:"#33540b",}} aria-hidden="true"></span>   1  <span className="fa fa-circle-minus fa-lg" style={{color:"#33540b",}} aria-hidden="true"></span></td>
          <td>$30,00</td>
          <td><span className="fa fa-trash-can fa-lg" style={{color: "#ffffff",}} aria-hidden="true"></span></td>
        </tr>
        <tr>
         
          <td>Café Americano</td>
          <td><span className="fa fa-circle-plus fa-lg" style={{color:"#33540b",}} aria-hidden="true"></span> 1  <span className="fa fa-circle-minus fa-lg" style={{color:"#33540b",}} aria-hidden="true"></span></td>
          <td>$30,00</td>
          <td><span className="fa fa-trash-can fa-lg" style={{color: "#ffffff",}} aria-hidden="true"></span></td>
        </tr>
        <tr>
          
        <td>Café con leche</td>
          <td><span className="fa fa-circle-plus fa-lg" style={{color:"#33540b",}} aria-hidden="true"></span> 1  <span className="fa fa-circle-minus fa-lg" style={{color:"#33540b",}} aria-hidden="true"></span></td>
          <td>$30,00</td>
          <td><span className="fa fa-trash-can fa-lg" style={{color: "#ffffff",}} aria-hidden="true"></span></td>
        </tr>

        <tr> 
        <td colSpan={2}>Total</td>
        <td> $90,00</td>
        
        </tr>
      </tbody>
    </Table>
            </Modal.Body>
            <Modal.Footer>
           <Button variant="success">Enviar a cocina</Button>
        
        </Modal.Footer>

        </div>
    );
}
OrdenarModal.propTypes ={
    type:PropTypes.string.isRequired
}

export default OrdenarModal
