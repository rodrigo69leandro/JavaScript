/*6. Escreva uma função chamada ehPrimo que receba um número e retorne se esse número é primo ou não. 
* Utilize a chamada dessa função em um loop para listar todos os números primos entre 2 e 30.
*/ 

function ehPrimo(num){
    if (num % 2){
        return true;
    }
        return false;
}

console.log(ehPrimo(11));
console.log();
console.log("------------------");

for (let cont = 2; cont <= 30; cont++){
    if(ehPrimo(cont)){
        console.log("O número: " + cont + " É ímpar!!");
    }
    else{
        console.log("O número: " + cont + " É par!!");
    }
}
