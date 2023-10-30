

// const baseUrl = 'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0'
const baseUrl = 'https://burguer-queen-api-mock.vercel.app'


//metodo para consumir endPoint con el metodo get 
export const getAllUsuario = async () => {
  const response = await fetch(`${baseUrl}/users?_page=1&_limit=10`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    }
  })

  if (response.status == 200) {
    return await response.json()
  }

}

//funcion para consumir el endPoint de eliminar usuario 

export const deleteAllUsers = async (id) => {
  const response = await fetch(`${baseUrl}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    }
  })
  if (response.status == 200) {
    return await response.json()
  }
}

//funcion para consumir el endPoint de crear usuario
export const postUsers = async (data) => {

  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  if (response.status == 200) {
    return await response.json()
  }
}

//funcion para consumir el endPoint de actualizar usuario
export const updateUsers = async (id, data) => {
  const response = await fetch(`${baseUrl}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  if (response.status == 200) {
    return await response.json()
  }
}


