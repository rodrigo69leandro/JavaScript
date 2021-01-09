/*
*    2. Partindo do array anterior, acrescente mais dois elementos ao seu final usando push. Depois, escreva um código que resulte em uma saída parecida com a abaixo, 
*     construída a partir do array com a estrutura for(... ; ... ; ...). Depois refaça o mesmo loop de mais duas maneiras, usando for ... in e for ... of.
*    - ciano
*    - verde
*    - amarelo
*    - vermelho
*    - azul
*/

let cores = ['ciano', 'verde', 'amarelo'];

cores.push("vermelho");
cores.push("azul");

for(let cont = 0; cont < cores.length; cont++){
    console.log(" - " + cores[cont]);
};

console.log();

for(let cont in cores){
    console.log(" - " + cores[cont]);
};

console.log();

for(let cont of cores){
    console.log(" - " + cont);
};