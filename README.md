# Burger Queen (API Client)

Colaboradoras: Katherine Cevallos y Luz María Vázquez

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones](#4-consideraciones)
* [5. Criterios de aceptación del proyecto](#5-criterios-de-aceptación-del-proyecto)
* [6. Despliegue](#6-despliegue)
* [7. Pistas / tips](#7-pistas--tips)

***

## 1. Definición del Producto

[React](https://es.react.dev/) y [Angular](https://angular.io/)
¡Bienvenido a Burger Queen Api Client ,es una aplicación PWA diseñada para la administración de los procesos de un restaurant.Esta aplicación tiene como objetivo principal ofrecer al usuario final  una forma conveniente y personalizada de gestionar a los usuarios y productos, crear ordenes, enviar las ordenes a cocina etc. 

## 2. Resumen del proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita un
sistema a través del cual puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.

El objetivo principal de este Aplicación web es proporcionar a los restaurantes una plataforma que les permita gestionar eficientemente a sus usuarios, administrar su catálogo de productos, así como tomar pedidos y enviarlos a la cocina de manera organizada y rápida.



## 3. Objetivos generales del proyecto

Caracteristicas principales:

Login:
- Ingresar usuario y contraseña.
- Se muestra el menu de acciones de acuerdo a cada perfil (Administrador, chef y mesero) si las credenciales son correctas.

Gestión de Usuarios (perfil administrador):

- Crear nuevos usuarios (Administrador, chef y mesero)
- Editar la información de los usuarios.
- Eliminar usuarios 

Catálogo de Productos:

- Crear  productos
- Editar productos del menú del restaurante,
- Asociar imágenes a los productos para una presentación visual atractiva.
- Eliminar productos

Ordenes (Perfil mesero):

- Agregar productos al pedido.
- Agregar el nombre del cliente.
- Eliminar los productos agregados al pedido.
- Ver resumen y total de la compra.
- Enviar pedido a cocina (guardar en api-mock)
- Ver la lista de ordenes y los estados  






Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.



### Vue

- [ ] **Instancia de Vue.js**

  <details><summary>Links</summary><p>

  * [La instancia Vue - Documentación oficial](https://es.vuejs.org/v2/guide/instance.html)
</p></details>

- [ ] **Datos y métodos**

  <details><summary>Links</summary><p>

  * [Datos y Métodos - Documentación oficial](https://es.vuejs.org/v2/guide/instance.html#Datos-y-Metodos)
</p></details>

- [ ] **Uso y creación de componentes**

  <details><summary>Links</summary><p>

  * [Conceptos Básicos de Componentes - Documentación oficial](https://es.vuejs.org/v2/guide/components.html)
</p></details>

- [ ] **Props**

  <details><summary>Links</summary><p>

  * [Pasando datos a componentes secundarios con Props - Documentación oficial](https://es.vuejs.org/v2/guide/components.html#Pasando-datos-a-componentes-secundarios-con-Props)
</p></details>

- [ ] **Directivas (v-bind | v-model)**

  <details><summary>Links</summary><p>

  * [v-bind - Documentación oficial](https://es.vuejs.org/v2/api/#v-bind)
  * [Binding en Formularios - Documentación oficial](https://es.vuejs.org/v2/guide/forms.html)
</p></details>

- [ ] **Iteración (v-for)**

  <details><summary>Links</summary><p>

  * [Mapeando una matriz a elementos con v-for - Documentación oficial](https://es.vuejs.org/v2/guide/list.html#Mapeando-una-matriz-a-elementos-con-v-for)
</p></details>

- [ ] **Eventos (v-on)**

  <details><summary>Links</summary><p>

  * [Manejo de eventos - Documentación oficial](https://es.vuejs.org/v2/guide/events.html)
</p></details>

- [ ] **Propiedades Computadas y Observadores**

  <details><summary>Links</summary><p>

  * [Propiedades Computadas y Observadores](https://es.vuejs.org/v2/guide/computed.html)
</p></details>

- [ ] **Routing**

  <details><summary>Links</summary><p>

  * [Getting Started - Documentación oficial de Vue Router](https://router.vuejs.org/guide/#html)
</p></details>

- [ ] **Clases y Estilos**

  <details><summary>Links</summary><p>

  * [Enlace Clases y Estilos - Documentación oficial](https://es.vuejs.org/v2/guide/class-and-style.html)
</p></details>

### typescript

- [ ] **Chequeo estático de tipos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#static-type-checking)
</p></details>

- [ ] **Rigurosidad**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictness)
  * [Documentación oficial de Typescript](https://www.typescriptlang.org/tsconfig#Type_Checking_6248)
</p></details>

- [ ] **Tipos primitivos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)
</p></details>

- [ ] **Arreglos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
</p></details>

- [ ] **Tipo `any`**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)
</p></details>

- [ ] **Funciones**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)
  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/functions.html)
</p></details>

- [ ] **Propiedades opcionales**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)
</p></details>

- [ ] **Tipos Union**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
</p></details>

- [ ] **Alias de tipos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
</p></details>

- [ ] **Interfaces**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)
</p></details>

- [ ] **Type assertions**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
</p></details>

- [ ] **Tipos literales**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
</p></details>

- [ ] **basic-types/null-and-undefined**

- [ ] **Enums**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#enums)
</p></details>

- [ ] **Narrowing**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
</p></details>

- [ ] **classes/members/fields**

- [ ] **classes/members/constructor**

- [ ] **classes/members/methods**

- [ ] **classes/members/getter-setters**

- [ ] **classes/class-heritage/implements**

- [ ] **classes/class-heritage/extends**

- [ ] **classes/member-visibility/public**

- [ ] **classes/member-visibility/protected**

- [ ] **classes/member-visibility/private**

- [ ] **Miembros de clase estáticos**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members)
</p></details>

- [ ] **this**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-at-runtime-in-classes)
</p></details>

- [ ] **Clases abstractas**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)
</p></details>

- [ ] **Decoradores**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/decorators.html)
</p></details>

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

## 4. Consideraciones

Este proyecto se debe "resolver" en duplas y para trabajar con el backend
te sugerimos elegir un metodo entre las siguientes opciones:

1. Usando una mock API. Puedes crear tu propia mock API con las herramientas
  [json-server](https://www.npmjs.com/package/json-server) y
  [json-server-auth](https://www.npmjs.com/package/json-server-auth)
  o puedes hacer fork y clonar
  [este repo de una mock API](https://github.com/Laboratoria/burger-queen-api-mock).

2. Consumiendo una API desplegada. Puedes usar una que desarrollarán tus
  compañeras o puedes usar
  [esta API que hemos desarrollado](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0).

Puedes empezar usando una mock API y en cualquier momento del proyecto
pasarte a la API desplegada. Esta situación suele ocurrir en Desarrollo Web
cuando se necesita avanzar con la implementación del frontend mientras las
personas encargadas del backend aún están en proceso de diseño o desarrollo
de la API.

El rango de tiempo estimado para completar el proyecto es de 3 a 5 Sprints.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.

Uno de los mayores objetivos de este proyecto es aprender a usar una librería o
framework popular para desarrollar una web app.
Debes elegir entre [React](https://es.react.dev/) o [Angular](https://angular.io/).

Ten en cuenta que si eliges Angular, tienes la obligación de usar [TypeScript](https://www.typescriptlang.org/).
_Typescript_ es un lenguaje de programación fuertemente tipado basado en
javascript.

Si eliges React, la decisión de usar Typescript es opcional (pero te lo
recomendamos!). Aquí puedes encontrar más información en relación a cómo iniciar
tu proyecto con [Typescript y React](https://itnext.io/create-react-v18-typescript-project-with-vite-d0d602e4a60e).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**mobile-first**.

Necesitamos pensar bien en el aspecto UX de de quienes van a tomar los pedidos,
 el tamaño y aspecto de los botones, la visibilidad del estado actual del
 pedido, etc.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 90% de _statements_, _functions_,
_lines_ y _branches_.

Por otro lado, deberás definir la estructura de carpetas y archivos que consideres
necesaria. Puedes guiarte de las convenciones del _framework_ elegido. Por ende,
los _tests_ y el _setup_ necesario para ejecutarlos, serán hechos por ti.

## 5. Criterios de aceptación del proyecto

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.

***

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

## 6. Despliegue

Puedes elegir el proveedor (o proveedores) que prefieras junto
con el mecanismo de despligue y estrategia de alojamiento.
Recuerda que si mockeaste la API, también tienes que desplegarla.
Te recomendamos explorar las siguientes opciones:

* [Vercel](https://vercel.com/) es una plataforma de _despliegue_ que
nos permite desplegar nuestra aplicación web estática (HTML, CSS y
JavaScript) y también nos permite desplegar aplicaciones web que se
ejecutan en el servidor (Node.js).
* [Netlify](https://www.netlify.com/) al igual que Vercel, es una
plataforma de _despliegue_ que nos permite desplegar nuestra aplicación
web estática (HTML, CSS y JavaScript) y también nos permite desplegar
aplicaciones web que se ejecutan en el servidor (Node.js).

## 7. Pistas / Tips

Súmate al canal de Slack
[#project-bq-api-client](https://claseslaboratoria.slack.com/archives/C04A0GS1WJX)
para conversar y pedir ayuda del proyecto.

### Frameworks / libraries

* [React](https://react.dev/)
* [Angular](https://angular.io/)

### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)
* [json-server](https://www.npmjs.com/package/json-server)

### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
