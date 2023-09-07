import Table from 'react-bootstrap/Table';

const UsuarioPage = () => {
  return (
    <div>
     <br />
      <div className="container background-table ">
          <div className="row justify-content-md-end p-3" >
            <div className="col col-md-3">
            <button type="button" className="btn btn-success" aria-label="Left Align">
             <span className="fa fa-user-plus fa-lg" aria-hidden="true"></span> Agregar Usuario
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
            <th>Puesto</th>
            <th>Acciones</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dalia</td>
            <td>Chef</td>
            <td>
            <button type="button" className="btn btn-success me-1" aria-label="Left Align">
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
            <td>
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
  );
};

export default UsuarioPage;
