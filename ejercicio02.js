/**
 * * EJERCICIO 01: MOLDEADO DE INVENTARIO
 * * MICHALLE MUÑOZ
 */

// * Se define la function constructor
function Mascota(nombre, especie, edad, peso) {
    
    // * this para objeto que se está creando
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    // * Se define metodo para presentarse
    this.presentarse = function () {
        return `Hola ${this.nombre}, eres un(a) ${this.especie} de ${this.edad} año. Tu peso es de ${this.peso} kg`;
    }
}

// * Se crean instancias
const gato = new Mascota("Tomsito", "gato", 6, 15);
const gata = new Mascota("Pichita", "gato", 10, 8);
const tortuga = new Mascota("Tortilla", "tortuga", 1, 2);

// * Se muestra en consola las instancias creadas utilizando el metodo
console.log(gato.presentarse());
console.log(gata.presentarse());
console.log(tortuga.presentarse());