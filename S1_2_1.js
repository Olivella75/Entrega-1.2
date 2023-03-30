/*Mostra per la consola el resultat d'una arrow function autoinvocable 
que sumi dos nombres.*/

((a = 1, b = 2) => console.log (a + b))(); //Si no poses valors agafa els per defecte

((a = 1, b = 2) => console.log (a + b))(5, 10);