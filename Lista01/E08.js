/* 
* 8. Dado o seguinte código:
* let x = 3;
* let y;
* if(x == 3)
*    y = 'três';
* else
*   y = 'não três';
* console.log(y);
* Substitua todas as linhas (menos a primeira e a última) por uma única instrução contendo um operador ternário, mantendo a mesma lógica do algoritmo.
*
*/

let x = 3;
let y;

x == 3 ? y = "três" : y = "não três";

console.log(y);