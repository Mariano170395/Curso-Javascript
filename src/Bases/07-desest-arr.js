const personajes = ['goku', 'vegeta', 'trunks'];

//Desestructuracion

//Llamando al segundo personaje
const[ ,p2] = personajes;

console.log(p2)

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [a1] = retornaArreglo();

console.log(a1)

//Tarea
//Primera posicion el primer valor del arreglo se llamara nombre
//El segundo se va a llamar setNombre
const useState = (valor) => {
    return [ valor, () => { console.log('hola mundo') } ]
}

const [nombre, setNombre] = useState('goku')
console.log(nombre)
setNombre()