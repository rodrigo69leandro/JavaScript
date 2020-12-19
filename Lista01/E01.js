/*
* 1. Crie duas variáveis, chamadas ifb e campus, com os valores 'Instituto Federal de Brasília' e 'Campus Brasília', respectivamente.
* Crie uma terceira variável que concatene as duas separando por vírgula e escreva o resultado na tela. 
* Depois , faça a mesma coisa utilizando interpolação de strings.
* Saída esperada:
* Instituto Federal de Brasília, Campus Brasília
* Instituto Federal de Brasília, Campus Brasília
*/

let ifb = "Instituto Federal de Brasília, ";
let campus = "Campus Brasília";
let ifbCampus = ifb + campus;

console.log(ifbCampus);
console.log(`${ifb}${campus}`);