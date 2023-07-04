//Math es una librería interna de javascript

let aleatorio = Math.random() //0-1 no incluye el 1: 0.999999999999999
//console.log(aleatorio*5) // aumentadmos el rango de 0 a 5 sin incluir el 5

let numeroEntero = Math.floor(aleatorio*5)
//console.log("Numero aleatorio= ", numeroEntero)

let piso = -1.2
//console.log(Math.floor(piso))

let arregloPlanetas = ["mercurio","venus", "tierra", "marte", "júpiter", "saturno"]
let longitud = arregloPlanetas.length
let indiceAleatorio = Math.floor(Math.random()*longitud) //0-6 sin incluir el 6

//console.log("indiceAleatorio = ", indiceAleatorio)
//console.log("elemento: ", arregloPlanetas[indiceAleatorio])

const arregloAleatorio = (arreglo) => {
    let length = arreglo.length //guardando la longitud del arreglo
    let indice = Math.floor(Math.random()*length) //escogía un índice aleatorio
    let planeta = arreglo[indice]
    return planeta
}


let resultadoPlaneta = arregloAleatorio(arregloPlanetas)
console.log("el planeta aleatorio es: ", resultadoPlaneta)

let resultadoAnimales = arregloAleatorio([{nombre:"Antonio"},{nombre:"Alexis"}, {nombre:"Pablo"}])
console.log("el animal escogido es: ", resultadoAnimales)

