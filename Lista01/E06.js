/*
* 6. Escreva um script que leia 2 valores como parâmetros da linha de comando e escreva na tela o maior deles.
*/

let valor1 = process.argv[2];
let valor2 = process.argv[3];

valor1 > valor2 ? console.log("O maior valor é " + valor1)  : console.log("O maior valor é " + valor2); 

/* if(valor1 > valor2 ){

    console.log("O maior valor é " + valor1);
}
else{
    console.log("O maior valor é " + valor2);
}; 
*/
