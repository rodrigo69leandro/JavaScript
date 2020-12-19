/*
 * 8. Modifique o script anterior para mostrar, separadamente, a soma e a média dos números pares e a soma e a média dos números ímpares.
 */
let input = 10;
let total = 0;
let par = 0;
let impar = 0;
let contPar = 0;
let contImpar = 0;

for(let cont = 1 ; cont <= input; cont++){
   console.log(cont);
   total += cont;

   if(cont % 2){
       impar += cont;
       contPar ++;
   }
   else{
       par += cont;
       contImpar ++;
   }
}
console.log("Soma total: " + total);
console.log("Média: " + total/input);
console.log("Soma dos números pares: " + par);
console.log("Média dos números pares: " + (par/contPar));
console.log("Soma dos números impares: " + impar);
console.log("Média dos números impares: " + (impar/contImpar));