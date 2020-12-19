/* 2. Modifique o exemplo anterior para que a função, ao invés de escrever diretamente a saudação na tela, retorne-a como uma string. 
*  Construa duas chamadas para a função, de modo a escrever os resultados na tela (a instrução console.log deve estar fora da função).
*/

console.log(saudacao("Rodrigo"));
console.log(saudacao("Raquel"));

function saudacao(nome){
    return "olá " + nome + "!!";
}