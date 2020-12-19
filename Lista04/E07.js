/* 7. Escreva uma função para calcular a área de um círculo, dado o raio. Se o raio for negativo, 
*  deve ser retornado o valor 0. Dica: Use Math.PI para obter o valor de π.
*/

function raio(r){
    if(r != 0 ){
        return 2 * Math.PI * r;
    }
    return 0;
}
console.log(raio(10));

