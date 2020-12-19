/*
 * 7. Escreva um script que, utilizando um loop for, exiba os números de 1 a 10 e, ao final, a soma e a média desses valores.
 */
 
 let input = 10;
 let total = 0;

for(let cont = 1 ; cont <= input; cont++){
    console.log(cont);
    total += cont;
}
console.log("Soma total: " + total);
console.log("Média: " + total/input);

