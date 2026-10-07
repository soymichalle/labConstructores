/**
 * * EJERCICIO 04: CONCESIONARIO DE VEHICULOS
 * * MICHALLE MUÑOZ
 */

const prompt = require("prompt-sync")();

// * Se define la function constructor
function Vehiculo(marca, motor, modelo, numAsientos, numPuertas) {
    this.marca = marca;
    this.motor = motor;
    this.modelo = modelo;
    this.numAsientos = numAsientos;
    this.numPuertas = numPuertas;

    this.mostrarInfoVehiculo = function () {
        console.log("=== MOSTRAR INFO DEL VEHICULO ===");
        
        console.log("Marca: " + this.marca);
        console.log("Motor: " + this.motor);
        console.log("Modelo: " + this.modelo);
        console.log("Numero de Asientos: " + this.numAsientos);
        console.log("Numero de Puertas: " + this.numPuertas);
    }

    this.modificarAsientos = function () {
        console.log("=== MODIFICAR NO. ASIENTOS DEL VEHICULO ===");

        if (this.numAsientos > 4) {
            this.numAsientos = 4;
            return `El numero de asientos es invalido. Se deja por defecto en ${this.numAsientos}`;
        }
        return `El numero de asientos está bien :)`;

    }

    this.modificarMarca = function (nuevaMarca) {
        console.log("=== MODIFICAR MARCA DEL VEHICULO ===");

        if (this.marca == nuevaMarca) {
            return `La marca digitada ya está almacenada.`;
        }
        this.marca = nuevaMarca
        return `La marca ha sido actualizada. Valor de nueva marca: ${this.marca}`;

    }
}

let vehiculos = [];

for (let i = 0; i < 3; i++) {
    console.log("===== DIGITAR VALORES DE NUEVO VEHICULO =====");

    let marca = prompt("¿Cual es la marca del vehiculo? ");
    let motor = prompt("¿Cual es la motor del vehiculo? ");
    let modelo = prompt("¿Cual es la modelo del vehiculo? ");
    let numAsientos = prompt("¿Cual es el numero de asientos del vehiculo? ");
    let numPuertas = prompt("¿Cual es el numero de puertas del vehiculo? ");

    let vehiculo = new Vehiculo(marca, motor, modelo, numAsientos, numPuertas);

    vehiculos.push(vehiculo);
}

console.log("===== METODOS =====");

vehiculos[0].mostrarInfoVehiculo();
console.log(vehiculos[1].modificarAsientos());

let nuevaMarca = prompt("El tercer vehiculo requiere actualización. Digite la nueva marca del vehiculo: ");
console.log(vehiculos[2].modificarMarca(nuevaMarca));
vehiculos[2].mostrarInfoVehiculo();

console.log("===== FIN =====");
