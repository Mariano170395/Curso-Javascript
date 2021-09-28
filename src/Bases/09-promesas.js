


const promesa = new Promise((resolve, reject)=>{

    setTimeout( ()=>{
        //Tarea
        //Importar getHeroeByID(2)
        // const heroe = getHeroeById(2)
        // console.log(heroe)
    }, 2000 )
});

promesa.then( ()=>{
    console.log('Then de la promesa')
} )

