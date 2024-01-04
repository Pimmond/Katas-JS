// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza', //repetitive
  'chicken',
  'onion rings',
  'pasta', //repetitive
  'soda'
]
function removeDuplicates(param) {
  for (var index = 0; index < param.length; index++) {
    for (let index2 = 0; index2 < param.length; index2++) {
      if (index !== index2) {
        if (param[index] === param[index2]) {
          noDuplicates = param.splice(index2, 1)
        }
      }
    }
  }
  return param
}

newArray = removeDuplicates(duplicates)
console.log(newArray)
