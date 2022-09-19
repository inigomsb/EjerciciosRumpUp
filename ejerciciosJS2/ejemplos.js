let frutas = ["Manzana", "Banana", 3];
console.log(frutas); // Manzana y Banana 
console.log(frutas.length); // 2
let primero = frutas[0] // Manzana
console.log(frutas[2]);
let ultimo = frutas[frutas.length - 1]; // Banana
console.log(ultimo)
let nuevaLongitud = frutas.push('Naranja'); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
console.log(nuevaLongitud)

ultimo = frutas.pop(); // Elimina "Naranja" del final
// ["Manzana", "Banana"]
console.log(frutas)
console.log(ultimo)
ultimo = frutas.pop();
console.log(frutas);
let unica = frutas.pop();
console.log(frutas);
console.log(unica);