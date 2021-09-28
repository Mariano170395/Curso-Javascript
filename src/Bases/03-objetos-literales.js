//Objeto literal

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 2342345,
        lng: 34.345345,
        lat: 34.123,
    }
}


console.log(persona);
console.table(persona);

//Esto no copia el valor, esto copia la referencia
// const persona2 = persona;
// persona2.nombre = 'Peter';

//Asi se copia un objeto 
const persona2 = {...persona}

console.log(persona2)
