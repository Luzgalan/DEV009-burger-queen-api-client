import { useState } from "react";
import { Table } from "react-bootstrap"
import { Modal } from "react-bootstrap";
import UsuarioModal from "../../components/modals/usuario.modal";

const UsuarioPage = () => {

   //declaración de una variable de estado

   const [showModal, setShowModal] = useState(false);
   const [tipoModal, setTipoModal] = useState('')

   const mostrarModal = (type) => {
       setShowModal(true)
       setTipoModal(type)
   }
   const ocultarModal = () => {
       setShowModal(false)

   }
  return (
     <>
    <div>
     <br />
      <div className="container background-table ">
          <div className="row justify-content-md-end p-3" >
            <div className="col col-md-3">
            <button onClick={() => mostrarModal('Registrar')} type="button" className="btn btn-success" aria-label="Left Align">
             <span className="fa fa-user-plus fa-lg" aria-hidden="true"></span> Agregar Usuario
            </button>            
            </div>
          </div>
          <div className="row  p-3">
            <div className="col-md-12">
            <Table  className='table'>
                <thead>
                 <tr>
                <th>#</th>
            <th>Nombre</th>
            <th>Puesto</th>
            <th className='text-end'>Acciones</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dalia</td>
            <td>Chef</td>
            <td className='text-end'>
            <button onClick={() => mostrarModal('Editar')} type="button" className="btn btn-success me-1" aria-label="Left Align">
             <span className="fa fa-user-edit fa-lg" aria-hidden="true"></span> Editar
            </button>   
            <button type="button" className="btn btn-danger ms-1" aria-label="Left Align">
             <span className="fa fa-trash fa-lg" aria-hidden="true"></span> Eliminar
            </button>   
            </td>
           
          </tr>
          <tr>
            <td>1</td>
            <td>Dalia</td>
            <td>Chef</td>
            <td className='text-end'>
            <button type="button" className="btn btn-success me-1" aria-label="Left Align">
             <span className="fa fa-user-edit fa-lg" aria-hidden="true"></span> Editar
            </button>   
            <button type="button" className="btn btn-danger ms-1" aria-label="Left Align">
             <span className="fa fa-trash fa-lg" aria-hidden="true"></span> Eliminar
            </button>   
            </td>
           
          </tr>
          
        </tbody>
      </Table>
            </div>
          </div>
        </div>
    </div>
    <Modal dialogClassName="custom-modal" show={showModal} onHide={ocultarModal} variant="success">
    <UsuarioModal type={tipoModal}></UsuarioModal>
</Modal>
 </>
  );
};

export default UsuarioPage;
