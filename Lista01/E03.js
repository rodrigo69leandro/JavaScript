/*
* 3. Escreva um script que calcule o custo total de uma refeição em uma lanchonete: dois hambúrgueres com preço de R$ 9,95 
* cada, mais um milk-shake que custa R$ 8,00 e um refrigerante por R$ 4,50. Calcule o preço total após a adição de uma taxa 
* de 10%. Lembre de usar ponto, ao invés de vírgula, para separar as casas decimais.
*/

let hamburguer = 9.95;
let milkShake = 8.00;
let refrigerante = 4.50;
let valor = parseFloat((hamburguer *2) + milkShake + refrigerante);
let total = parseFloat((valor * 0.1) + valor);

console.log("Preço total da refeição é de R$:" + total);