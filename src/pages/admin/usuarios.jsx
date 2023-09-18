import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { Modal } from "react-bootstrap";
import UsuarioModal from "../../components/modals/usuario.modal";
import { deleteAllUsers, getAllUsuario } from "../../service/usuario/usuarios";
import Swal from 'sweetalert2';

const UsuarioPage = () => {


   //declaración de una variable de estado

   const [showModal, setShowModal] = useState(false);
   const [tipoModal, setTipoModal] = useState('')


   const [usuario,setUsuarios]= useState([])
   //variable para renderizar
const [render, setRender] = useState(false) 
   //funcion useEfect para hacer la peticion cuando cargue la pagina 
   useEffect(()=>{
    //consumir servicio 
    getAllUsuario().then(data=> setUsuarios(data));
   },[render])

   const mostrarModal = (type) => {
       setShowModal(true)
       setTipoModal(type)
   }
   const ocultarModal = () => {
       setShowModal(false)

   }

//funcion para eliminar 
const showAlertdelete = (user) => {
    console.log(user)
    Swal.fire({
        title: `Estas seguro de eliminar al usuario ${user.name}?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sí',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            deleteAllUsers(user.id).then(()=>{
                Swal.fire('Usuario eliminado con éxito!', '', 'success')
                setRender(!render)
            })
         
        } 
      })
  };


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
            <th>email</th>
            <th>Puesto</th>
            <th className='text-end'>Acciones</th>
           
          </tr>
        </thead>
        <tbody>
            {

                usuario.map(user=>(
                    <tr key={user.id}>
                    <td key={user.id}>{user.id} </td>
                    <td key={user.name}>{user.name} </td>
                    <td key={user.email}>{user.email} </td>
                    <td key={user.role}>{user.role} </td>
                    <td className='text-end'>
            <button onClick={() => mostrarModal('Editar')} type="button" className="btn btn-success me-1" aria-label="Left Align">
             <span className="fa fa-user-edit fa-lg" aria-hidden="true"></span> Editar
            </button>   
            <button  onClick={()=> showAlertdelete(user) } type="button" className="btn btn-danger ms-1" aria-label="Left Align" >
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
    </div>
    <Modal dialogClassName="custom-modal" show={showModal} onHide={ocultarModal} variant="success">
    <UsuarioModal type={tipoModal}></UsuarioModal>
</Modal>
 </>
  );
};

export default UsuarioPage;
