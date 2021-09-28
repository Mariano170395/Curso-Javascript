//Importar archivo heroes

import { heroes } from "./data/heroes"
// import { heroes } from './data/heroes'

// console.log(heroes)

const getHeroeById = (id) =>{
    for(let i = 0; i < heroes.length; i++){
        if(heroes[i].id === id){
            return heroes[i]
        }
    }
}

console.log(getHeroeById(5))