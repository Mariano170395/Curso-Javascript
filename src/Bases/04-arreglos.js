//Arreglos 

const arr = [2];
arr.push(1,2,3) //Agrega un valor al final
//Usar el push no es recomendable
console.log(arr);

//Asi se inserta un valor al final de manera correcta usando el stread operator 
let arr2 = [...arr, 5];
console.log(arr2);
//Quiero multiplicar todos los elementos del arr2 x2
const arr3 = arr2.map(function(numero){ //callback
    return numero * 2
});
console.log(arr3);