//Variables y constantes

const nombre = 'Mariano';
let apellido = 'Silva'


let valorDado = 5;

//Para volver a asignar el valor hacemos esto
valorDado = 4;

console.log(nombre, apellido, valorDado);


//El scope de esa variable solo es dentro de el if
if(true){
    let valorDado = 6
    console.log(valorDado);
}

//Me da valor 4 porque toma el valorDado de arriba por el scope
console.log(valorDado);