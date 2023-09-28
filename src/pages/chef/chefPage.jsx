import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllOrdenes } from "../../service/orders"
import { useEffect, useState } from "react"

const ChefPage = () => {

    const [ordenes, setOrdenes] = useState([]) //Se crea este estado para mostrar las ordenes del la api

    useEffect(() => {
        //consumir servicio 
        getAllOrdenes().then(respon => {
            const filterResp = respon.filter((orden) => orden.status === "pending")
            console.log(respon)
            setOrdenes(filterResp)
        })
    }, [])

    const convertirMarcaTiempo = (marcaTiempo) => {
        const fechaHora = new Date(marcaTiempo);
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };
        return fechaHora.toLocaleDateString('es-ES', options);
    };

    return (
        <div className='chef-container'>
            <h1>Bienvenido Chef</h1>
            <div className='orders-container'>
                <div className=''>
                    <h2>Pedidos Pendientes</h2>
                    {ordenes.map((orden) => (
                        <Card key={orden.id} style={{ width: '18rem' }} className='orders-cards-back'>
                            <Card.Body>
                                <Card.Title>Nombre: {orden.client}</Card.Title>
                                <Card.Title>Mesa: {orden.mesa}</Card.Title>
                                <Card.Title>Fecha y Hora: {convertirMarcaTiempo(orden.dateEntry)}</Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    {orden.products.map((producto, index) => (
                                        <div key={index}>
                                            <p>{producto.cantidad} {producto.name}</p>
                                            {/* <p>{producto.name}</p> */}
                                        </div>
                                    ))}
                                </Card.Text>
                                <Button variant="warning">Orden lista</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <div>
                    <h2>Pedidos Entregados</h2>
                    <Card style={{ width: '18rem' }} className='orders-cards-delivered'>
                        <Card.Body>
                            <Card.Title>Nombre: </Card.Title>
                            <Card.Title>Fecha: </Card.Title>
                            <Card.Title>Hora: </Card.Title>
                            <hr></hr>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the cards content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ChefPage
