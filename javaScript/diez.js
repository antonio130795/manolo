var array = [1,2,3]
console.log('array', array)

array[1] = 7
console.log('array', array)
const array2 = []

console.log('array2', array2)

let array3 = array

console.log('array3', array3)
console.log('array === array3 ' , array === array3)
array3 = array2
console.log('array3 === array ' , array3 === array)