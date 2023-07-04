/* //Tipo de Datos:
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
console.log(hola, ";", hola2) //copiado por valor, espacios de memoria distintos, hola2 es independiente de hola


//objetos
//1) Arreglos:
numeroE = 10
let arreglo1 = ["hola", 1, 3.14, numeroE + 1] //arrays
//    0     1   2        3
console.log("arreglo1: ", arreglo1)
console.log("arreglo1 en el índice 0: ", arreglo1[0])
console.log("arreglo1 en el índice 3: ", arreglo1[3])
console.log("longitud: ", arreglo1.length)
arreglo1.push("estoy en el último lugar")

console.log(arreglo1)
arreglo1.unshift("soy el primero")
console.log(arreglo1)

arreglo1.splice(1, 4)
console.log(arreglo1)

let arreglo2 = arreglo1
console.log("arreglo2: ", arreglo2)
arreglo1.push("final en el array")
console.log(arreglo1, arreglo2) // copia por referencia

let arreglo3 = arreglo1.slice()
arreglo1.push("elemento nuevo")
console.log(arreglo1, arreglo3) // copia por valor, forma correcta de hacer 

//2) objetos
let obj1 = {
   cadenaTexto: "ejemplo",
   numero: 3.14,
   arregloEjemplo: arreglo1
}
console.log("obj1: ", obj1) */

let persona = {
    nombre: "Antonio",
    direccion: "EEUU",
    edad: 34
}
/* console.table(persona)

console.log(persona["direccion"])
console.log(persona.edad) */

persona["nombre"] = "Alexis"
/* console.table(persona) */

persona["familiares"] = [{nombre:"Juan"}, {nombre:"Pedro"}]
//console.log(persona)

let persona1 = persona
persona["nombre"] = "Jose"
//console.log(persona1)

let persona2 = JSON.stringify(persona) //copiando un texto
persona["nombre"] = "Ana"
//console.log(persona2)
persona2 = JSON.parse(persona2) //convierto el texto a objeto
//console.log(persona2)

//Loops = ciclo

/* for(let i=10; i>=0; i=i-2){
    console.log(i)
} */

let planetas = ["mercurio", "venus", "tierra", "marte", "júpiter", "saturno"]

/* for(let i=0; i<planetas.length; i=i+1){
    console.log(planetas[i], i)
} */

/* for(let indice in planetas){ //imprimiendo son los índices del arreglo
    console.log(planetas[indice], indice)
}
 */
/* for(let elemento of planetas){ //elemento refiere a cada item del arreglo
    console.log(elemento)
} */

let tierra = {
    aire: ["oxígeno", "nitrógeno", "helio"],
    suelo: ["arena", "silicatos", "arcilla"],
    agua: "h2O",
    lugar: 3
}

/* for(let key in tierra){
    console.log(key, tierra[key])
} */

/* for(let [value, key] of Object.entries(tierra)){
    console.log(value)
} */

let mensajes = {
    saludo:"este es el mensage de saludo", 
    despedida:"este es un mensaje de despedida"
}

let arrMensaje = ["este es el mensaje de saludo", "este es el mensaje de salida", mensajes]

let cambio = 9
let vuelto = 10
/* if(cambio < 5){
    console.log("cambio es menor que 5")
}else if(cambio == 5 || vuelto<1){
    console.log("cambio vale 5")
    console.log("vuelto es menor a 1")
}
else if(cambio == 5 || vuelto>1){
    console.log("cambio vale 5")
    console.log("vuelto es mayor a 1")
}
else{
    console.log("cambio es mayor  que 5")
} */

let opcion = "mansión"
let precio = "casa"
switch(true){
    case precio<100:
        console.log("el precio es menor a 100")
        break;
    case precio>100:
        console.log("el precio es mayor a 100")
        break;
    default:
        console.log("el precio es 100")
        break
}