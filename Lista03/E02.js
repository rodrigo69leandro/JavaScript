/*
 * 2. Baseado em dois parâmetros, x e n, escreva um script que calcule o valor de x2, sem usar Math.pow ou o operador **.
 * Ex.: Para os parâmetros 3 e 4, deve ser exibido o resultado 81.
 */

let numero = process.argv[2];
let expoente = process.argv[3];
let resultado = 1;

for(let cont = 0 ; cont < expoente; cont++){
    resultado *= numero;
};
console.log("Resposta " + resultado);

