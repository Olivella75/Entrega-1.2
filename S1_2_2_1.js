/*Crea una arrow function que, rebent un paràmetre, retorni un objecte 
amb un atribut que tingui com a valor el paràmetre rebut.*/

const fletxa = (parametre) => {
    return {
        name : parametre
    }
}
const resultat = fletxa ("Jordi");

console.log(resultat);