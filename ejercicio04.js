/**
 * * EJERCICIO 04: CONTROL DE ESTADOS MODIFICABLES
 * * MICHALLE MUÑOZ
 */

// * Se define la function constructor
function Libro(nombre, autor, paginas, genero) {
    // * this para objeto que se está creando
    this.nombre = nombre;
    this.autor = autor;
    this.paginas = paginas;
    this.genero = genero;
    this.prestado = false;

    // * Se definen metodos
    this.prestar = function () {
        if (this.prestado === true) {
            return `El libro ${this.nombre} ya ha sido prestado.`;
        }
        if (this.prestado === false) {
            this.prestado = true;
            return `El estado del libro ${this.nombre} ha sido modificado. Libro prestado!`;
        }
    }

    this.devolver = function () {
        if (this.prestado === false) {
            return `El libro ${this.nombre} ya ha sido devuelto.`;
        }
        if (this.prestado === true) {
            this.prestado = false;
            return `El estado del libro ${this.nombre} ha sido modificado. Libro devuelto!`;
        }
    }
}

// * Se crean instancias
const bananaFish = new Libro("Banana Fish Tomo 1", "Una japonecita", 30, "Romance");
const boticaria = new Libro("Los diarios de la Boticaria Tomo 20", "Una japonecita", 30, "Novela ligera");

// * Se muestra en consola las instancias creadas utilizando el metodo
console.log(bananaFish.devolver());
console.log(bananaFish.prestar());
console.log(boticaria.prestar());
console.log(bananaFish.devolver());