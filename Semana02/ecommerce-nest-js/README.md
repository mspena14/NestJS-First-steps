Usuarios de prueba 

{
  "email": "user@example.com",
  "password": "user123"
}

{
  "email": "admin@example.com",
  "password": "admin123"
}
1. Usuarios
Registrar un Usuario
Método: POST
Ruta: /auth/register
Descripción: Registra un nuevo usuario.
Cuerpo de Solicitud (Request Body):
json

{
  "email": "user@example.com",
  "password": "userpassword"
}
Iniciar Sesión
Método: POST
Ruta: /auth/login
Descripción: Inicia sesión y devuelve un token JWT.
Cuerpo de Solicitud (Request Body):
json

{
  "email": "user@example.com",
  "password": "userpassword"
}
2. Productos
Obtener Todos los Productos
Método: GET
Ruta: /products
Descripción: Obtiene la lista de todos los productos.
Obtener un Producto por ID
Método: GET
Ruta: /products/:id
Descripción: Obtiene un producto específico por su ID.
Parámetro de Ruta (Path Parameter): id
Crear un Producto
Método: POST
Ruta: /products
Descripción: Crea un nuevo producto. Solo accesible por administradores.
Cuerpo de Solicitud (Request Body):
json

{
  "name": "Product Name",
  "price": 19.99,
  "description": "Product Description"
}
Actualizar un Producto
Método: PUT
Ruta: /products/:id
Descripción: Actualiza un producto específico por su ID. Solo accesible por administradores.
Cuerpo de Solicitud (Request Body):
json

{
  "name": "Updated Product Name",
  "price": 29.99,
  "description": "Updated Product Description"
}
Parámetro de Ruta (Path Parameter): id
Eliminar un Producto
Método: DELETE
Ruta: /products/:id
Descripción: Elimina un producto específico por su ID. Solo accesible por administradores.
Parámetro de Ruta (Path Parameter): id
3. Pedidos
Crear un Pedido
Método: POST
Ruta: /orders
Descripción: Crea un nuevo pedido. El totalPrice se calcula automáticamente.
Cuerpo de Solicitud (Request Body):
json

{
  "products": [1, 2, 3] // IDs de los productos que se incluirán en el pedido
}
Obtener Todos los Pedidos
Método: GET
Ruta: /orders
Descripción: Obtiene la lista de todos los pedidos.
Obtener un Pedido por ID
Método: GET
Ruta: /orders/:id
Descripción: Obtiene un pedido específico por su ID.
Parámetro de Ruta (Path Parameter): id