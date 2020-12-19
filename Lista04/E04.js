/* 4. Escreva uma função que receba dois números como parâmetros e retorne a soma entre os dois. 
*  Utilize várias chamadas dessa função, sem modificá-la, para realizar a soma de 4 números e escrever o resultado na tela.
*/
function calculo(n1, n2,){
    return n1 + n2; 
}

console.log("Realizando calculo com 4 numeros: ");

let c1 = calculo(21, 06);
let c2 = calculo(10,20);

console.log("Calculo 1: " + calculo(c1, c2));

let c3 = calculo(10, 05);
let c4 = calculo(20,21);

console.log("Calculo 2: " + calculo(c3, c4));

