// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

// for (let index = 0; index < mixedElements.length; index++) {
//   console.log(typeof mixedElements[index])
// }
function averageWord(elements) {
  var suma = 0
  for (const element of elements) {
    // console.log(element)
    if (typeof element == 'string') {
      suma += element.length
    } else {
      suma += element
    }
  }
  return suma // no me queda claro si hay que retornar la suma o el promedio. En caso de ser promedio, será: return suma / mixedElements.length
}
console.log(averageWord(mixedElements)) // comprobación del resultado: 41;
