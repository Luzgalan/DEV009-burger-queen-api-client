import { Button, Card, Modal } from "react-bootstrap"
import OrdenarModal from "../../components/modals/ordenar.modal";
import { useState, useEffect } from "react";
import { getAllProductos } from "../../service/producto";




const OrdenarPages = () => {
    //declaración de una variable de estado

    const [showModal, setShowModal] = useState(false);
    const [tipoModal, setTipoModal] = useState('')

    const [productos, setProductos] = useState([])

    //Se crea este estado para el filtro de los productos de acuerdo a su tipo 
    const [tipoFiltro, setTipoFiltro] = useState('');

    //funcion useEfect para hacer la peticion cuando cargue la pagina 
    useEffect(() => {
        //consumir servicio 
        getAllProductos().then(respon => setProductos(respon));
    }, [])

    const mostrarModal = (type) => {
        setShowModal(true)
        setTipoModal(type)
    }
    const ocultarModal = () => {
        setShowModal(false)

    }

    // Actualizar el estado 'tipoFiltro' con el tipo seleccionado
    const filtrarProductos = (tipo) => {
        setTipoFiltro(tipo);
      };

    return (
        <>
            <div className="container overflow-hidden ">
                <br />
                <div className="row mb-5">
                    <div className="col-md-3  ">
                        <button className="text-white" onClick={() => filtrarProductos('Desayuno')}>Desayuno</button>
                    </div>
                    <div className="col-md-3">
                        <button className="text-white" onClick={() => filtrarProductos('Almuerzo')}>Resto del día</button>
                    </div>
                    <div className="col-md-3">
                        <button className="text-white" onClick={() => filtrarProductos('Resto del día')} >Resto del día</button>
                    </div>
                    <div className="col-md-3 offset-md-3">
                        <button onClick={() => mostrarModal('Registrar')} type="button" className="btn btn-success me-1" aria-label="Left Align">
                            <span className="fa fa-user-edit fa-lg" aria-hidden="true"></span> Ver orden
                        </button>
                    </div>

                </div>
                <div className="row g-5">

                    {productos
                    .filter((producto) => !tipoFiltro || producto.type === tipoFiltro)
                    .map((producto) => (
                        <div className="col-xl-3 col-md-4 col-sm-6" key={producto.id}>
                            <Card className="fondo-de-tarjeta">
                                <div>
                                    <img className="cardImg" src={producto.image} alt={producto.name} />

                                </div>
                                <Card.Body>
                                    <Card.Title className="texto-tarjeta">{producto.name}</Card.Title>
                                    <Card.Text className="texto-tarjeta">${producto.price}</Card.Text>
                                    <Button variant="success">Agregar</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <Modal dialogClassName="custom-modal" show={showModal} onHide={ocultarModal} variant="success">
                <OrdenarModal type={tipoModal}></OrdenarModal>
            </Modal>
        </>
    )
}

export default OrdenarPages
