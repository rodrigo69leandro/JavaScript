/* 
 * 4. Modifique a resposta do item anterior para utilizar for ao invés de while.
 * 
*/

for(let fah = 0 ;fah <= 110 ; fah += 5 ){

    let cel = (fah - 32)*5/9;

    console.log("Temperatura em Fahrenheit: " + fah + "°");
    console.log("Temperatura em Celsius: " +(cel.toFixed(2)) + "°" );
    console.log();
}
