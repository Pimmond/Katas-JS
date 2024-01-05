// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(wordArray, word) {
  let count = 0
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === word) {
      count++
    }
  }
  return count
}
