/**
 *  4 Modifique a função anterior para que ela seja chamada com um número variável de argumentos numéricos, 
 *  ao invés de um array. Por exemplo, calcula(4, 8, 20, 6), deve retornar o objeto { soma: 38, media: 9.5 }.
 */

function calcula(...array){
    let soma = 0;
    let media = 0;
    let qntd = 0;

     for(let cont = 0; cont < array.length; cont++){
        soma = soma + array[cont];
        qntd++
    }
    
    media = soma/qntd;
    console.log("Soma: " + soma + ", média: "+ media);

}

calcula(4,8,20,6,13,27);
calcula(10, 10, 10, 10);
