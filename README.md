1. ¿Qué ventaja tecnica tiene crear un molde (fucntion constructora) en lugar de escribir un objeto literal estructurado individualmente para cada computador?

### Respuesta:
Una función constructora permite definir una estructura reutilizable para crear múltiples instancias de un mismo tipo de objeto, evitando tener que declarar cada computador manualmente como un objeto literal independiente (aquí utilizamos `new` de forma manual para simular la creación de instancias a partir de diferentes entradas. En un escenario real, estas instancias podrían generarse dinámicamente a partir de datos proporcionados por el usuario o provenientes de una fuente externa)

2. ¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?

### Respuesta:
Un método accede de manera precisa y aislada a las propiedades de su propio objeto mediante `this.`, porque `this` hace referencia al objeto/instancia que está ejecutando el método. Permitiendo que cada objeto/instancia trabaje únicamente con sus propios datos, evitando confundir propiedades entre los objetos.

3. ¿Qué ventajas a nivel de cohesión de software presenta el hecho de que el objeto conozca por si mismo su estado lógico (si aprobó o no)?

### Respuesta:
Ventajas como:
* Evitar tener que hacer validaciones externas a la creacion de la instancia (la de aprobó o desaprobó). 
* Facil mantenimiento si llega a cambiar la logica (de la validación u otro requerimiento, solo se modifica el constructor).
* Menor probabilidad de tener el código duplicado.
* Facilidad para uso y reutlización del código ;)

4. ¿Qué ocurriría si el libro ya estaba prestado y alguien intenta prestarlo nuevamente sin controles de estado internos?

### Respuesta:
Si no existiera un control interno del estado del libro, el programa podría permitir que se registre nuevamente un préstamo aunque el libro ya esté prestado, generando inconsistencias en la información. En un sistema conectado a una base de datos, esto podría provocar que dos personas aparezcan como responsables del mismo libro al mismo tiempo, lo cual no corresponde con el estado real del recurso, porque solo habria un ejemplar del libro en el presente ejercicio.

5. 