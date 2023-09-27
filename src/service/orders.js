const baseUrl = 'http://127.0.0.1:8080'

export const createOrder = async (orderData) => {
  const response = await fetch(`${baseUrl}/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (response.status === 201) {
    return await response.json();
  } else {
    throw new Error('No se pudo crear el producto');
  }
};


//Funcion para obtener todos las ordenes 
export const getAllOrdenes = async () => {
  const response = await fetch(`${baseUrl}/orders?_page=1&_limit=10`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    }
  })

  console.log(response)
  if (response.status == 200) {
    return await response.json()
  }
  else {
    throw new Error('Token invalido inicie sesion nuevamente')
  }

}