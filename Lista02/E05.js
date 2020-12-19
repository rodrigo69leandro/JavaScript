/*
* 5. Modifique a resposta do item anterior para indicar maneira diferenciada (por exemplo, com um texto adicional), as linhas que contém temperaturas abaixo ou acima de 0°C.
*/

for(let fah = 0 ;fah <= 110 ; fah += 5 ){

    let cel = (fah - 32)*5/9;

    if(cel < 0){
    console.log("Temperatura em Fahrenheit: " + fah + "°");
    console.log("Temperatura em Celsius: " +(cel.toFixed(2)) + "°" );
    console.log();
    console.log("\033[31mATENÇÃO");
    console.log("Agasalhe-se e fique em casa!! \033[0m");
    console.log();
    }
    else if (cel > 0){
        console.log("Temperatura em Fahrenheit: " + fah + "°");
        console.log("Temperatura em Celsius: " +(cel.toFixed(2)) + "°" );
        console.log();
        console.log("\033[0;32m Divirta-se \033[0m");
        console.log();
    }
 }