/*
* 5. Modifique a questão anterior para ler a temperatura em Fahrenheit a partir de um parâmetro da linha de comando.
*/

let tempFa = process.argv[2];

console.log("A temperatura de " + tempFa + "°" + " em Fahrenheit convertida para Celsius é de " + ((tempFa - 32)*5/9) + ("°"));