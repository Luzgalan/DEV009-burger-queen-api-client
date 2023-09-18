export const getAllProductos = async () => {
  const baseUrl = 'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0'
  const response = await fetch(`${baseUrl}/products?_page=1&_limit=10`)
  const data = await response.json()
  return data
}

