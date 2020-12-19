/* 
 * 3. Use while para exibir uma lista de equivalências de temperaturas de Fahrenheit para Celsius, de 5 °F a 110 °F, em incrementos de 5 °F.
 * C = \frac{5}{9} ( F - 32)C=95​(F−32)
 * 
*/

let fah = 0;
while(fah <= 110){

    let cel = (fah - 32)*5/9;

    console.log("Temperatura em Fahrenheit: " + fah + "°");
    console.log("Temperatura em Celsius: " +(cel.toFixed(2)) + "°" );
    console.log();
    fah += 5; 
}