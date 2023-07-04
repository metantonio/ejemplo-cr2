//estructura de una función 
//F(x) = x + 1
function nombre(primerNombre){
   let texto = "Mi nombre es: " + primerNombre
   return texto
}

//para llamar a la función hay que nombrarla:
let resultado = nombre("Antonio")

let resultadoSuma = suma(2, 10)
console.log(resultadoSuma)

function suma(a, b){
    let resultado = a + b
    return resultado
}


//console.log("resultado de la suma es: ",resultadoSuma)


//función flecha
const resta = (a, b) => {
    let resultado = a - b
    return resultado
}

let resultadoResta = resta(4 , 4)
console.log("resultado de la resta es: ", resultadoResta)