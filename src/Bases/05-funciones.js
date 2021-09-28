//Funciones
const saludar = (nombre) =>{
    return `hola ${nombre}`
}

console.log(saludar('mariano'))

const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'DonBarre',
    })


console.log(getUser())

//Tarea
//Convertir en arrow
//debe retornar un objeto implicito
//Pruebas

// function getUsuarioActivo (nombre){
//     return{
//         uid:'abc134',
//         username: nombre
//     }
// }

// const usuarioActivo = getUsuarioActivo('Mariano')

// console.log(usuarioActivo)

const getUsuarioActivo = (nombre) => 
   ({
        uid:'abc134',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Mariano')

console.log(usuarioActivo)
