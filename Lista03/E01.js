/*
* 1. Escreva uma script que exiba a tabela da multiplicação de um número passado como parâmetro. Por exemplo: para o parâmetro 8, deve ser exibido:
*
* 8 x 1 = 8
* 8 x 2 = 16
* 8 x 3 = 24
* 8 x 4 = 32
* 8 x 5 = 40
* 8 x 6 = 48
* 8 x 7 = 56
* 8 x 8 = 64
* 8 x 9 = 72
*/

console.log("TABUADA");
console.log(" ");

let input = process.argv[2];

for(let cont = 1; cont <= 9; cont++){

    console.log(input +` X ${cont} = ` + input * cont);
    
}