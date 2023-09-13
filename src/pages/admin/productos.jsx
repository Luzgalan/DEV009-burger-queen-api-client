import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { Modal } from "react-bootstrap";
import ProductosModal from "../../components/modals/productos.modal";
import { getAllProductos } from "../../service/producto";


const ProductosPage = () => {


    //declaración de una variable de estado

    const [showModal, setShowModal] = useState(false);
    const [tipoModal, setTipoModal] = useState('')

    const [productos,setProductos]= useState([])
 
//funcion useEfect para hacer la peticion cuando cargue la pagina 
useEffect(()=>{
 //consumir servicio 
 getAllProductos().then(respon=> setProductos(respon));
},[])

  //funciones para abrir modal
    const mostrarModal = (type) => {
        setShowModal(true)
        setTipoModal(type)
    }
    const ocultarModal = () => {
        setShowModal(false)

    }

    return (
        <>
            <br />
            <div className="container background-table ">
                <div className="row justify-content-md-end p-3" >
                    <div className="col col-md-3">
                        <button onClick={() => mostrarModal('Registrar')} type="button" className="btn btn-success" aria-label="Left Align">
                            <span className="fa fa-user-plus fa-lg" aria-hidden="true"></span> Agregar Producto
                        </button>
                    </div>
                </div>
                <div className="row  p-3">
                    <div className="col-md-12">
                        <Table responsive="sm" className='table'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Categoria</th>
                                    <th>Precio</th>
                                    <th className='text-end'>Acciones</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productos.map(producto=> (
                                        <tr key={producto.id}>
                                        <td key={producto.id}>{producto.id} </td>
                                        <td key={producto.name}>{producto.name} </td>
                                        <td key={producto.type}>{producto.type} </td>
                                        <td key={producto.price}>{producto.price} </td>
                                        <td className='text-end'>
                                        <button onClick={() => mostrarModal('Editar')}  type="button" className="btn btn-success me-1" aria-label="Left Align">
                                            <span className="fa fa-user-edit fa-lg" aria-hidden="true"></span> Editar
                                        </button>
                                        <button type="button" className="btn btn-danger ms-1" aria-label="Left Align">
                                            <span className="fa fa-trash fa-lg" aria-hidden="true"></span> Eliminar
                                        </button>
                                    </td>
                                        </tr>
                                    ))
                                }
                               

                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <Modal dialogClassName="custom-modal" show={showModal} onHide={ocultarModal} variant="success">
                <ProductosModal type={tipoModal}></ProductosModal>
            </Modal>
        </>
    )
}

export default ProductosPage
