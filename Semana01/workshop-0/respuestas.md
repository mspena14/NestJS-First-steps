- **Preguntas parte 1**:
   1. ¿Qué propósito cumple el archivo `main.ts` en un proyecto NestJS y por qué es crucial en la configuración inicial? 
   R// main.ts es el punto de entrada de la aplicación, en este se configura y arranca el servidor. Este archivo se encarga de configurar las capas externas de la app e inicializa el servidor, en este archivo no se maneja la lógica de negocio, pero sí conecta todos los componentes necesarios para que la app pueda procesar solicitudes.

   2. ¿Qué diferencia existe entre `app.module.ts` y `app.controller.ts`? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación?
   R// Las diferencias entre estos es que app.module.ts es el que se encarga de organizar y agrupar los otros modulos necesarios para que la app funcione, se encuentra en la capa de configuración. En este modulo se asignan las funcionalidades que tendra cada modulo, una especie de rol, en este modulo no se involucra la lógica de negocio.

   Por otro lado, app.controller.ts es el que se encarga de recibir las solicitudes del cliente, y maneja las rutas y métodos HTTP de esas solicitudes. El controlador recibe la solicitud, la direcciona hacía la lógica de negocio necesaria y devuelve la respuesta al cliente. No debe contener lógica de negocio, es básicamente un direccionador que nos da una respuesta.

   Estos modulos se relacionan con la modularidad ya que divide las funcionalidades, en este caso tenemos al modulo que se encarga de una tarea y es unir todas las partes necesarias de la aplicación para que esta funcione, sin contener lógica o procesos que no le corresponden, mientras que el controlador, que tampoco contiene lógica de negocio, solo se encarga de direccionar las solicitudes de los cliente, esperar una respuesta y devolver esa respuesta. 

---

- **Preguntas parte 2**:
   1. ¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?
   R// Porque así podemos controlar cada proceso de una manera diferente, utilizando los recursos o dependencias unicamente unicamente donde son necesaria y sobretodo para la identificación de errores, ya que con esta estructura si hay una parte de la aplicación fallando el error nos dirá en que modulo es para que corrijamos unicamente el módulo que lo presente y no tener que validar en toda la lógica de la aplicación para hallarlo.

   2. ¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?
   R// En cuanto al mantenimiento nos permite gestionar errores como menciono anteriormente, a la actualización de componentes, a la reutilización del codigo en diferentes secciones de la aplicación, en cuanto a la escalabilidad nos permite añadir nuevas funcionalidades sin generar interrupciones en las demás partes de la aplicación, se puede desarrolar la aplicación de manera más rápida ya que se puede separar responsabilidades a diferentes grupos de trabajo, todo esto gracias a la modularidad que nos permite separar los diferenctes servicios o funciones de nuestra app.

   3. Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?
   R// Con el comando que acabamos de implementar creamos un endpoint para users y otro para loans, que al procesarlo nos crea el modulo .module.ts el cual es el punto de partida de cada endpoint, ya que es el que se encargará de conectar las diferentes funcionalidades o nuevos modulos que creermos.

---

- **Preguntas parte 3**:
   1. ¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?
   R// Si se asigna incorrectamente lo más probable es que nos de un error al momento de realizar una solicitud http al endpoint, o nos podría generar un resultado distinto al que buscamos. 
   2. ¿Por qué es importante manejar rutas dinámicas (por ejemplo, `@Get(':id')`) en aplicaciones que interactúan con bases de datos?
   R// Porque nos permite obtener información especifica de la base de datos, permitiendonos generar un mayor portafolio de posibles funcionalidades de nuestra aplicación.

---

- **Preguntas parte 4**:
   1. ¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?
   R// Esto evita que el controller se sature de procesos, ya que el controlador ya se encarga de recibir la solicitud y devolver la respuesta, es posible que al manejar la lógica desde controller esa respuesta se vea alterada.
   2. ¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?
   R// La inyección de dependencias es clave para modularidad ya que nos permite implementar los metodos de la clase sin necesidad de crear varias instancias de esta, así evitando saturar nuestra aplicación ya que se reutiliza la misma instancia para todasd las solicitudes y se ocupa menos espacio en la memoria.

---

- **Preguntas**:
   1. ¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?
   R// Para validar que se estén cumpliendo con los parametros establecidos de cada solicitud o entidad, que no se puedan agregar propiedades adicionales o que no cumplan con lo estandarizado. En general nos ayuda a gestionar la seguridad de la aplicación en cuanto a la información recibida.
   2. ¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?
   R// Esto podría generar error a la hora de recibir una solicitud, transformando los datos en algo que no deseamos o procesando de manera incorreta, también sei estos datos se guardan errados, a la hora de consultar los datos en base de datos.

---

- **Preguntas**:
   1. ¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?
   R// 
   2. ¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?

---