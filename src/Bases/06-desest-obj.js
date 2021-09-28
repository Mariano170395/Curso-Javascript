//Desestructuracion (IMPORTANTE)
//Asignacion desestructurante 

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    latlng: {
        lat: 45,
        lng: 34,
    }
}
//Forma lenta
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//De structuring
// const {nombre, edad, clave} = persona //Extrae lo que esta dentro de las llaves del objeto
// console.log(nombre, edad, clave)

const retornaPersona = ({ nombre, edad, clave, rango='capitan'}) => {
//   console.log(nombre, rango)
  return {
      nombreClave: clave,
      anios: edad,
  }
}

const {nombreClave, anios} = retornaPersona(persona)

console.log(nombreClave, anios, )