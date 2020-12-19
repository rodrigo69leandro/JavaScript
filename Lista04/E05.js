/* 5. Escreva uma função que receba uma temperatura em Fahrenheit e retorne o valor em Celsius. 
* Modifique a questão 3 da Lista de Exercícios 2 para chamar essa função dentro do loop ao construir a tabela.
*/

function temperaturaUnica(fah){
    let cel =  (fah - 32)*5/9;
    return console.log("Temperatura em Celsius: " +(cel.toFixed(2)) + "°" ); 
}

function temperatura(){
    let fah = 0;
    while(fah <= 110){
        let cel = (fah - 32)*5/9;
        console.log("Temperatura em Fahrenheit: " + fah + "°");
        console.log("Temperatura em Celsius: " +(cel.toFixed(2)) + "°" );
        console.log();
        fah += 5; 
    }
}

temperaturaUnica(80);
console.log();
console.log();
temperatura();
