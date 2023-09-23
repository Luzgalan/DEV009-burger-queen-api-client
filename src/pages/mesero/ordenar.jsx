import { Button, Card, Form, FormGroup, Table } from "react-bootstrap"
//import OrdenarModal from "../../components/modals/ordenar.modal";
import { useState, useEffect } from "react";
import { getAllProductos } from "../../service/producto";




const OrdenarPages = () => {
    /* -------------------------------------------------------------------------- */
    /*                            Constantes de Estado                            */
    /* -------------------------------------------------------------------------- */

    // const [showModal, setShowModal] = useState(false);
    // const [tipoModal, setTipoModal] = useState('')  //Se muestra el modal de acuerdo 
    const [productos, setProductos] = useState([]) //Se crea este estado para mostrar los productos desde la API 
    const [tipoFiltro, setTipoFiltro] = useState(''); //Se crea este estado para el filtro de los productos de acuerdo a su tipo 
    const [productosSeleccionados, setProductosSeleccionados] = useState([]); // Nuevo estado para los productos seleccionados

    /* -------------------------------------------------------------------------- */
    /*                  Constante efecto - Solicita datos al back                 */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        //consumir servicio 
        getAllProductos().then(respon => setProductos(respon));
    }, [])

    /* -------------------------------------------------------------------------- */
    /*                             Funciones y metodos                            */
    /* -------------------------------------------------------------------------- */



    // Actualizar el estado 'tipoFiltro' con el tipo seleccionado
    const filtrarProductos = (tipo) => {
        setTipoFiltro(tipo);
    };

    const agregarProducto = (producto) => {
        // Clonar la lista actual de productos seleccionados y agregar el nombre del producto
        const nuevosProductosSeleccionados = [...productosSeleccionados];
        nuevosProductosSeleccionados.push(producto.name);
        setProductosSeleccionados(nuevosProductosSeleccionados);
    };

    return (
        <>
            <div className="container-overflow-hidden">
                <div className="product-cards">
                    <div className="row mb-5">
                        <div className="col-md-3">
                            <p>Escoge la categoría: </p>
                        </div>
                        <div className="col-md-3">
                            <Button className="type-product" variant="outline-light" size="lg" onClick={() => filtrarProductos('Desayuno')}>Desayuno</Button>
                        </div>
                        <div className="col-md-3">
                            <Button className="type-product" variant="outline-light" size="lg" onClick={() => filtrarProductos('Almuerzo')}>Almuerzo</Button>
                        </div>
                    </div>
                    <div className="container-products-cards">
                        <div className="row g-5">
                            {productos
                                .filter((producto) => !tipoFiltro || producto.type === tipoFiltro)
                                .map((producto) => (
                                    <div className="col-xl-3 col-sm-6" key={producto.id}>
                                        <Card className="fondo-de-tarjeta">
                                            <div>
                                                <img className="cardImg1" src={producto.image} alt={producto.name} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title className="texto-tarjeta">{producto.name}</Card.Title>
                                                <Card.Text className="texto-tarjeta">${producto.price}</Card.Text>
                                                <Button variant="success" onClick={() => agregarProducto(producto)}>Agregar</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="order-form">
                    <Form className="form-to-order">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre del cliente</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <FormGroup>
                            <Form.Label>Mesa</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Número de mesa </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </Form.Select>
                        </FormGroup>
                    </Form>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Producto </th>
                                <th>Cantidad</th>
                                <th >Precio</th>
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {productosSeleccionados.map((nombreProducto, index) => {
                                const producto = productos.find((p) => p.name === nombreProducto);
                                return (
                                    <tr key={index}>
                                        <td>{nombreProducto}</td>
                                        <td>1</td>
                                        <td>{`$${producto.price}`}</td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td colSpan={2}>Total</td>
                                <td> $90,00</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="success">Enviar a cocina</Button>
                </div>
            </div>


            {/* // <Modal dialogClassName="custom-modal" show={showModal} onHide={ocultarModal} variant="success">
            //     <OrdenarModal type={tipoModal}></OrdenarModal>
            // </Modal> */}
        </>
    )
}

export default OrdenarPages
