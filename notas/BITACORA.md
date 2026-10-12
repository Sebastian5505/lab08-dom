# Bitacora de JavaScript interactivo 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. 
Navegador usado: (Chrome) 
## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
| :--- | :--- | :--- |
| textContent desde la consola | El texto del elemento seleccionado cambia inmediatamente en el navegador.|No |
| textContent desde app.js |El texto del elemento seleccionado se actualiza automáticamente al cargar la página. |Si |
| style.color | El color de la fuente del elemento seleccionado cambia al color asignado| Si|
| classList.add |El elemento adquiere los colores de la nueva clase CSS que hayamos asignado |Si |
| createElement + appendChild |Aparece un nuevo elemento visual en la interfaz, posicionado al final del contendor |Si |

## Ejercicio 3: Evento click 
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
| :--- | :--- | :--- |
| click | Hace solo 1 click.|+1 |
| dblclick |Hace doble click rápido y continuo. |+2 |
| mouseover |Pasar el puntero del maus por encima del elemento.  |+1 |

evento.type mostró en la consola el nombre del evento que fue disparado por el usuario (click).
evento.target mostró en la consola el elemento HTML exacto sobre el cual se realizó dicha acción.
## Ejercicio 4: Eventos input y submit 
| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) | 
|--------|-------------------------|------------------------------| 
| Escribir en el campo nombre |El texto Hola, ... se va actualizando en tiempo real con cada letra que se escribe en el input. |No | 
| Enviar sin preventDefault |La pantalla se pone en blanco por un instante, el formulario se limpia por completo y los valores ingresados desaparecen. |Si | 
| Enviar con preventDefault, correo sin @ |Aparece una alerta nativa del navegador indicando que falta incluir el signo '@' en la dirección de correo. |No | 
| Enviar con preventDefault, correo con @ |El formulario se procesa correctamente |No |

## Ejercicio 5: Clases y objetos 
| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
| :--- | :--- | :--- | :--- | :--- |
| laptop | Laptop | S/ 2500.00 | Laptop - S/ 2500.00 | S/ 1875.00 |
| mouse | Mouse | S/ 45.00 | Mouse - S/ 45.00 | S/ 33.75 |
| teclado | Teclado | S/ 120.00 | Teclado - S/ 120.00 | S/ 90.00 |
| monitor | Monitor | S/ 680.00 | Monitor - S/ 680.00 | S/ 510.00 |
## Ejercicio 6: DOM, eventos y objetos juntos
| Prueba | Total que muestra la pagina | Correcto (Si/No) | 
|--------|-----------------------------|------------------| 
| Cuaderno 12.50 |S/ 12.50 |Si | 
| + Lapicero 3.20 |S/ 15.70 |Si | 
| + Mochila 89.90 |S/ 105.60 |Si | 
| Sin Number() |S/ 12.503.2089.90|No | 

| Pieza | Linea de tu codigo donde aparece | Para que sirve | 
|-------|----------------------------------|----------------| 
| DOM | Línea 83 | Sirve para seleccionar y manipular los elementos de la interfaz HTML desde JavaScript.| 
| Evento |Línea 87 |Sirve para detectar las interacciones del usuario (como clics o inputs) y ejecutar código en respuesta.| 
| Objeto |Línea 82 |Sirve para modelar y agrupar los datos y funciones de una entidad (como las propiedades de un producto).|
