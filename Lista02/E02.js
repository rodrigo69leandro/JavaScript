/*
* 2. Modifique a questão anterior para que o número máximo a ser exibido venha de um parâmetro da linha de comando
*/

let input = process.argv[2];

for(let cont = 1 ; cont <= input; cont++){
    console.log(cont);
}