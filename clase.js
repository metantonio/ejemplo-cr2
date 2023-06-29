//Tipo de Datos:
//Datos primitivos:
let hola = "Hola mundo! cómo estás?" //cadena de texto o string
const PI = 3.1415 //number, float
console.log(PI)
var numeroE = 2.716 
numeroE = 5 //number, integer
console.log(numeroE)

let booleano = true //booleano
console.log(booleano)

let nombreNulo = null //ocurre cuando falla en dársele un valor a la variable
console.log(nombreNulo)

let indefinido //ocurre cuando nunca se le asigna un valor a la variable
console.log(indefinido)

indefinido = "adiós"
console.log(indefinido)

let hola2 = hola
console.log(hola2)
hola = "valor cambiado"
console.log(hola,";", hola2) //copiado por valor, espacios de memoria distintos, hola2 es independiente de hola


//objetos
//1) Arreglos:
numeroE = 10
let arreglo1 = ["hola", 1, 3.14 , numeroE+1] //arrays
            //    0     1   2        3
console.log("arreglo1: ", arreglo1)
console.log("arreglo1 en el índice 0: ", arreglo1[0])
console.log("arreglo1 en el índice 3: ", arreglo1[3])
console.log("longitud: ", arreglo1.length)
arreglo1.push("estoy en el último lugar")

console.log(arreglo1)
arreglo1.unshift("soy el primero")
console.log(arreglo1)

arreglo1.splice(1,4)
console.log(arreglo1)

let arreglo2 = arreglo1
console.log("arreglo2: ", arreglo2)
arreglo1.push("final en el array")
console.log(arreglo1, arreglo2) // copia por referencia

let arreglo3 = arreglo1.slice()
arreglo1.push("elemento nuevo")
console.log(arreglo1, arreglo3) // copia por valor, forma correcta de hacer 