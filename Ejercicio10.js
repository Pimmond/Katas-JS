// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  var suma = 0
  var media = 0
  for (var i = 0; i < param.length; i++) {
    suma += param[i]
  }
  return suma / param.length
}

console.log(average(numbers)) // comprobación del resultado: 23,4;
