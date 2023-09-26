import { Button, Card, Form, FormGroup, Table } from "react-bootstrap"
//import OrdenarModal from "../../components/modals/ordenar.modal";
import { useState, useEffect } from "react";
import { getAllProductos } from "../../service/producto";
import Swal from "sweetalert2";
import { createOrder } from "../../service/orders";




const OrdenarPages = () => {
    /* -------------------------------------------------------------------------- */
    /*                            Constantes de Estado                            */
    /* -------------------------------------------------------------------------- */

    const [productos, setProductos] = useState([]) //Se crea este estado para mostrar los productos desde la API 
    const [tipoFiltro, setTipoFiltro] = useState(''); //Se crea este estado para el filtro de los productos de acuerdo a su tipo 
    const [productosSeleccionados, setProductosSeleccionados] = useState([]); // Nuevo estado para los productos seleccionados

    const [nameClient, setnameClient] = useState('');
    const [mesa, setMesa] = useState('');

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

    const save = (e) => {
        e.preventDefault();
        const dataOrden = {
            client: nameClient,
            mesa: mesa,
            products: productosSeleccionados,
            status: "pending",
            dateEntry: Date.now()

        }

        if(dataOrden.client==''){
            Swal.fire({ text:'Ingrese el nombre del cliente', icon:'warning'}) 
            return
        }
        if(dataOrden.mesa==''){
            Swal.fire({ text:'Seleccione una mesa', icon:'warning'}) 
            return
        }
        if(dataOrden.products.length == 0){
            Swal.fire({ text:'Asegurese de seleccionar al menos un producto', icon:'warning'}) 
            return
        }

        createOrder(dataOrden).then(()=> {
            Swal.fire({text:'Orden creada exitosamente', icon: 'success'})
        })
        console.log(dataOrden)

    }
    // Actualizar el estado 'tipoFiltro' con el tipo seleccionado
    const filtrarProductos = (tipo) => {
        setTipoFiltro(tipo);
    };

    const agregarProducto = (producto) => {
        // Clonar la lista actual de productos seleccionados y agregar el nombre del producto
        // const nuevosProductosSeleccionados = [...productosSeleccionados];
        // nuevosProductosSeleccionados.push(producto.name);
        // setProductosSeleccionados(nuevosProductosSeleccionados);
        const productExist = productosSeleccionados.find((x) => x.name == producto.name)

        if (productExist) {
            // El producto ya existe en la lista, actualiza la cantidad
            const nuevosProductosSeleccionados = productosSeleccionados.map((p) => {
                if (p.name === producto.name) {
                    return { ...p, cantidad: p.cantidad + 1, pricetotal: Number(p.pricetotal) + Number(producto.price) };
                } else {
                    return p;
                }
            });

            setProductosSeleccionados(nuevosProductosSeleccionados);
        } else {
            // El producto no existe en la lista, agrégalo con cantidad 1
            producto.cantidad = 1;
            producto.pricetotal = Number(producto.price)
            setProductosSeleccionados([...productosSeleccionados, producto]);
        }

        console.log(productosSeleccionados)

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
                                                <img className="cardImg1" src={`/${producto.image}.jpg`} alt={producto.name} />
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
                    <Form className="form-to-order" onSubmit={save}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre del cliente</Form.Label>
                            <Form.Control type="text" placeholder="" value={nameClient} onChange={(e) => setnameClient(e.target.value)} />
                        </Form.Group>
                        <FormGroup>
                            <Form.Label>Mesa</Form.Label>
                            <Form.Select aria-label="Default select example" value={mesa} onChange={(e) => setMesa(e.target.value)}>
                                <option>Número de mesa </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </Form.Select >
                        </FormGroup>
                   
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Producto </th>
                                <th>Cantidad</th>
                                <th >Precio</th>
                                <th >Precio total</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                productosSeleccionados.map(product => (
                                    <tr key={product.id}>
                                        <td >{product.name} </td>
                                        <td >{product.cantidad} </td>
                                        <td >$ {product.price} </td>
                                        <td >$ {product.pricetotal} </td>
                                    </tr>
                                ))
                            }
                            {/* {productosSeleccionados.map((nombreProducto, index) => {
                                const producto = productos.find((p) => p.name === nombreProducto);
                                return (
                                    <tr key={index}>
                                        <td>{nombreProducto}</td>
                                        <td>1</td>
                                        <td>{`$${producto.price}`}</td>
                                    </tr>
                                );
                            })} */}
                            <tr>
                                <td>Total</td>
                                <td>$ {productosSeleccionados.length == 0 ? '0' : productosSeleccionados.reduce((prev, next) => prev + next.cantidad, 0)} </td>
                                <td></td>
                                <td>$ {productosSeleccionados.length == 0 ? '0' : productosSeleccionados.reduce((prev, next) => prev + next.pricetotal, 0)} </td>

                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="success" type="submit">Enviar a cocina</Button>
                    </Form>
                </div>
            </div>


            {/* // <Modal dialogClassName="custom-modal" show={showModal} onHide={ocultarModal} variant="success">
            //     <OrdenarModal type={tipoModal}></OrdenarModal>
            // </Modal> */}
        </>
    )
}

export default OrdenarPages
