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


¡Bienvenido a Burger Queen Api Client ,es una aplicación PWA diseñada para la administración de los procesos de un restaurant. Esta aplicación tiene como objetivo principal ofrecer al usuario final  una forma conveniente y personalizada de gestionar a los usuarios y productos, crear ordenes, enviar las ordenes a cocina etc. 

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
- Eliminar usuarios.

Catálogo de Productos (perfil administrador):

- Crear  productos
- Editar productos del menú del restaurante,
- Asociar imágenes a los productos para una presentación visual atractiva.
- Eliminar productos.
- Eliminar las ordenes.

Ordenes (Perfil mesero):

- Agregar productos al pedido.
- Agregar el nombre del cliente.
- Eliminar los productos agregados al pedido.
- Ver resumen y total de la compra.
- Enviar pedido a cocina (guardar en api-mock)
- Ver la lista de ordenes y los estados  


  Pedidos  (Perfil chef):

- Visualiza los pedidos pendientes.
- Cambia el estado de la orden pendiente a enviado.
- Todas las ordenes con estado (delivering) son enviados al perfil del mesero.




