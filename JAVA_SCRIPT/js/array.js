// PUSH
const arrayFrutas = ["Manzana", "Banana"];
const agregar = fruta => arrayFrutas.push(fruta);

agregar("Pera");

console.log(arrayFrutas); 




//POP
// Eliminar el último elemento del array
const eliminarF = () => arrayFrutas.pop();

const frutaEliminada = eliminarF();

console.log(arrayFrutas);
console.log(frutaEliminada);





//SHIFT
// Función flecha para eliminar el primer elemento del array

const Numeros = [1, 2, 3, 4, 5];

const eliminarN = () => Numeros.shift();

const numeroE = eliminarN();

console.log(Numeros);
console.log(numeroE); 




//UNSHIFT
// Función flecha para AGREGAR AL primer elemento del array

const arrayColores = ["Rojo", "Verde", "Azul"];
const agregarC = color => arrayColores.unshift(color);

agregarC("Morado");

console.log(arrayColores); 




//reduce
// Calcular la suma del array usando la función flecha

const arrayNumeros = [1, 2, 3, 4, 5];

const sumaN = (acumulador, numeroActual) => acumulador + numeroActual;

const sumaTotal = arrayNumeros.reduce(sumaN, 0);

console.log(sumaTotal); 




//FILTER
 // Función flecha para filtrar personas por ciudad
const arrayPersonas = [
    { nombre: "Ana", edad: 20, ciudad: "Medellín" },
    { nombre: "Juan", edad: 25, ciudad: "Bogotá" },
    { nombre: "Maria", edad: 30, ciudad: "Medellín" },
  ];
  
 
  const BOGOTA = persona => persona.ciudad === "Bogotá";
  const personaB = arrayPersonas.filter(BOGOTA);
  
  console.log(personaB); 
 


//MAP
// Función flecha para convertir un nombre a mayúsculas

const arrayNombres = ["Ana", "Juan", "Maria"];

const aMayusculas = nombre => {
  return nombre.toUpperCase(); 
};

const nombresMayusculas = arrayNombres.map(aMayusculas);

console.log(nombresMayusculas);

