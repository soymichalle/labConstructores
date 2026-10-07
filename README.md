1. ¿Qué ventaja tecnica tiene crear un molde (fucntion constructora) en lugar de escribir un objeto literal estructurado individualmente para cada computador?

### Respuesta:
Una función constructora permite definir una estructura reutilizable para crear múltiples instancias de un mismo tipo de objeto, evitando tener que declarar cada computador manualmente como un objeto literal independiente (aquí utilizamos `new` de forma manual para simular la creación de instancias a partir de diferentes entradas. En un escenario real, estas instancias podrían generarse dinámicamente a partir de datos proporcionados por el usuario o provenientes de una fuente externa)

2. ¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?

### Respuesta:
Un método accede de manera precisa y aislada a las propiedades de su propio objeto mediante `this.`, porque `this` hace referencia al objeto/instancia que está ejecutando el método. Permitiendo que cada objeto/instancia trabaje únicamente con sus propios datos, evitando confundir propiedades entre los objetos.
