/*
* 7. Escreva um script que leia 3 valores como parâmetros da linha de comando e escreva na tela o maior deles.
*/ 
let valor1 = process.argv[2];
let valor2 = process.argv[3];
let valor3 = process.argv[4];

 if(valor1 > valor2 && valor1 > valor3 ){

     console.log("O maior valor é " + valor1);
}
else if(valor2 > valor1 && valor2 > valor3 ){
    console.log("O maior valor é " + valor2);
}
else {
    console.log("O maior valor é " + valor3);
}
