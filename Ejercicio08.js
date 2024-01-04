const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.',
  'Modok'
]
function findLongestWord(params) {
  var lengthAnt = 0 // defino una variable para ir guardando la longitud de la palabra más larga y compararla con la que se está iterando; la inicializo con valor 0
  for (let i = 0; i < params.length; i++) {
    for (let j = 1; j <= params[i].length; j++) {
      var length = j // lenght es la longitud de la palabra que se está iterando
    }
    if (length > lengthAnt) {
      // hago una sentencia if para comprobar si la longitud de la palabra que itero es mayor que la más larga que se ha encontrado hasta ahora (lenghtAnt); en caso de serlo, guardo la longitud que estoy iterando como nueva lenghtAnt y guardo como palabra más larga la que tiene esa posición en el array con el iterador del primer bucle for
      lengthAnt = length
      longestWord = params[i]
    }
  }
  return longestWord // devuelvo la palabra más larga
}

longestWord = findLongestWord(avengers)
console.log(`La palabra más larga es ${longestWord}`)
