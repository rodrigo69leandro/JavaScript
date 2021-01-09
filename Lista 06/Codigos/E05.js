/**
* 5.Escreva uma função que receba um array bidimensional e escreva-o na tela como uma tabela com linhas e colunas separadas por tabulação ("\t").
* Por exemplo, para o array do slide 13, o resultado deve ser:
* Fred    Barney
* George  Jane    Elroy
* Homer   Marge   Bart
* Dica: para escrever na tela sem quebra de linha, use process.stdout.write no lugar de console.log.
*/

let familia = [
    ["Fred", "Barney"],
    ["George", "Jane", "Elroy"],
    ["Homer", "Marge", "Bart" ]
];

function mostrar(array){
    for(let linha of familia){
        for(let pessoa of linha){
            process.stdout.write (pessoa + "\t");
        }
        console.log();
    };
};
mostrar(familia)