/**
 * * EJERCICIO 03: LOGICA DE NEGOCIO
 * * MICHALLE MUÑOZ
 */

// * Se define la function constructor
function Estudiante(nombre, edad, nota) {

    // * this para objeto que se está creando
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
    if (nota >= 3) {
        this.aprobado = true;
    } else {
        this.aprobado = false
    }

    // * Se define metodo para mostrar resultado
    this.mostrarResultado = function () {
        if (this.aprobado == true) {
            return `El estudiante ${this.nombre} ha aprobado`;
        }

        return `El estudiante ${this.nombre} ha desaprobado`;
    }

}

const ana = new Estudiante("Ana Rodriguez", 26, 1.5);
const hernando = new Estudiante("Hernando Duarte", 46, 1);
const lau = new Estudiante("Laura Ortegon", 39, 4.2);
const michi = new Estudiante("Michalle Muñoz", 22, 2.9);

console.log(ana.mostrarResultado());
console.log(hernando.mostrarResultado());
console.log(lau.mostrarResultado());
console.log(michi.mostrarResultado());