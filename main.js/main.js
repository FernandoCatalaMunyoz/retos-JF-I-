// RETO 1
let a = 4;
let b = 2;
if (a > b) {
  console.log("a es mayor que b");
}
if (a < b) {
  console.log("a es menor que b");
}

// RETO 2

let nombre = ["Fernando"];
console.log("Bienvenido " + nombre);

// RETO 3

let nombre2 = prompt("Introduce tu nombre");
console.log("Bienvenido " + nombre2);

// RETO 4

const PI = 3.1415;
let r = parseInt(prompt("Introduce el radio"));
let area = PI * r ** 2;
console.log(area);

// RETO 5

let num = parseInt(prompt("Introduce un numero"));
if (num % 2 == 0) {
  console.log("es divisible entre dos");
} else {
  console.log("no es divisible entre 2");
}

// RETO 6

let precio = parseInt(prompt("Introduce el precio"));

let precioFinal = precio + precio * 0.21;
console.log(precioFinal);

// RETO 7

let numero = 0;
while (numero < 100) {
  numero++;
  console.log(numero);
}

// RETO 8

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

// RETO 9
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    console.log(i);
  }
}

// RETO 10

let numVentas = parseInt(prompt("Numero de ventas"));
let ventaTotal = [];
for (let i = 1; i <= numVentas; i++) {
  let ventas = parseInt(prompt("Venta"));

  ventaTotal.push(ventas);
}

const sumaVentas = ventaTotal.reduce(
  (acumulador, venta) => acumulador + venta,
  0
);
console.log(sumaVentas);

// RETO 11

let dia = prompt("Introduce un dia").toLowerCase().trim();

switch (dia) {
  case "lunes":
  case "martes":
  case "miercoles":
  case "jueves":
  case "viernes":
    console.log("No es fin de semana");
    break;
  case "sabado":
  case "domingo":
    console.log("Es fin de semana");
    break;
  default:
    console.log("Escribe un dia correcto");
}

// RETO 12

let password = "Fernando123";

console.log(password);
for (let i = 3; i > 0; i--) {
  let yourpasword = prompt("Introduce tu contraseña");

  if (yourpasword === password) {
    console.log("Enhorabuena");
    break;
  } else {
    console.log("vuelve a probar");
  }
}

RETO 13

let number1 = parseInt(prompt("Numero 1"));
let number2 = parseInt(prompt("Numero 2"));

let operation = prompt("Introduce la operacion");

if (operation == "+") {
  console.log(number1 + number2);
}
if (operation == "-") {
  console.log(number1 - number2);
}
if (operation == "*") {
  console.log(number1 * number2);
}
if (operation == "/") {
  console.log(number1 / number2);
}
if (operation == "^") {
  console.log(number1 ** number2);
}
if (operation == "%") {
  console.log(number1 % number2);
}
