# Tarea: Mi componente interactivo

## Componente elegido
Un **Registro de notas de estudiantes con cálculo de promedio**, que permite ingresar el nombre y la nota de un alumno, validarlos, listarlos dinámicamente y calcular en tiempo real el promedio del curso.
## Version 1: solo DOM
### Qué agregué y por qué
Se crearon los elementos estáticos en `index.html` (formulario, inputs, listas) y en `app.js` se implementó la manipulación básica del DOM usando `document.getElementById` y `document.createElement` para insertar elementos de prueba de forma estática en la lista, permitiendo visualizar la estructura base.
### Qué cambió en el comportamiento de la página
La página muestra la estructura visual con campos fijos insertados mediante código, permitiendo verificar que el DOM interactúa correctamente con el archivo de script.
## Version 2: con eventos
### Qué agregué y por qué
Se añadieron detectores de eventos (`addEventListener`) para escuchar el envío del formulario (`submit`), el cambio en los inputs (`input`) y clics en botones de eliminación (`click`), además de implementar una lógica condicional de validación de datos que muestra errores visuales sin usar alertas emergentes (`alert`).
### Qué cambió en el comportamiento de la página
La aplicación se volvió interactiva: el usuario ahora puede escribir notas reales, enviarlas mediante el formulario, ver mensajes de error en pantalla si ingresa datos inválidos y eliminar elementos dinámicamente.## Version 3: con clases y objetos
### Qué agregué y por qué
Se creó la clase `Estudiante` con un constructor, atributos (`nombre`, `nota`) y métodos (`obtenerDetalle`, `aprobo`), estructurando la lógica orientada a objetos para manejar los datos de manera modular y limpia, calculando además el promedio general de forma automática.
### Qué cambió en el comportamiento de la página
El sistema pasó de manejar simples cadenas o arreglos planos a instanciar objetos robustos, aplicando estilos visuales dinámicos según el rendimiento (aprobado o desaprobado) y calculando promedios precisos.## Donde uso DOM, eventos y objetos

| Componente | Elementos del Código | Descripción de su Uso |
| :--- | :--- | :--- |
| **DOM** | `document.getElementById`, `createElement`, `appendChild`, `innerHTML` | Captura de elementos de la interfaz y renderizado dinámico de la lista de estudiantes y el promedio. |
| **Eventos** | `submit`, `input`, `click` | Escucha del envío del formulario, validación en tiempo real y eventos de borrado de elementos o vaciado total. |
| **Objetos** | `class Estudiante`, `constructor`, métodos de clase | Modelado de los datos de los estudiantes para encapsular su estado y comportamiento (validar aprobación). |
## Pruebas realizadas

| Acción | Resultado Esperado | Resultado Obtenido | ¿Cumple? |
| :--- | :--- | :--- | :--- |
| Enviar formulario vacío | Mostrar mensaje de error visible en pantalla y no agregar nada. | Muestra el mensaje de error de validación correctamente. | Sí |
| Ingresar nota fuera de rango (ej. 25) | Mostrar mensaje de error por superar el límite máximo de 20. | Bloquea el ingreso y muestra el mensaje de error visual. | Sí |
| Agregar un estudiante válido (Ana, 16.5) | Añadir el elemento a la lista, calcular el promedio y limpiar inputs. | Se añade a la lista, se recalcula el promedio y se limpian los campos. | Sí |
| Hacer clic en el botón "Eliminar" de un registro | Borrar el elemento específico de la lista y actualizar el promedio. | Se elimina correctamente el estudiante seleccionado y se actualiza la vista. | Sí |
| Hacer clic en "Limpiar Todo" | Vaciar completamente el registro de notas y restablecer el promedio a 0.0. | La lista queda vacía y el promedio vuelve a 0.0. | Sí |


Diseñé la clase Estudiante con los atributos nombre y nota porque son esenciales para el registro, y los métodos obtenerDetalle() y aprobo() para encapsular la lógica y mantener el código limpio y reutilizable.

