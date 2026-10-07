/**
 * * EJERCICIO 01: MOLDEADO DE INVENTARIO
 * * MICHALLE MUÑOZ
 */

// * Se define la function constructor
function Computador(marca, procesador, ramGB, precio) {
    
    // * this para objeto que se está creando
    this.marca = marca;
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.precio = precio;
}

// * Se crean instancias
const laptop = new Computador("hp", 128, 8, 3000000 );
const mesa = new Computador("mcbook", 256, 16, 15000000);
const portatilgamer = new Computador("asus", 256, 16, 5000000);

// * Se muestra en consola las instancias creadas
console.log(laptop);
console.log(mesa);
console.log(portatilgamer);