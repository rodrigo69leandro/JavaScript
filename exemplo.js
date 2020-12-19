console.log("Olá mundo!!"); // Imprime na tela 

// declarar variavel, LET ou VAR, let é a melhor altertnativa 

let x = 123;
let c = "text";
let r = true;
let rr = false;

// podemos utilizar aspas simples ( ' ' ) ou duplas ( " " ) e também a crase( ` ` ) com uma diferença

console.log(x);
console.log(c);
console.log(r);
console.log(rr);       

// Para inserir aspas no texto, podemos utiilizar  a seguinte forma \"texto\"

let a = 123;
let b = 2;
let d = a + b; // Temos todos os operadores matematicos porém temos uma diferença no sinal de +, ele pode somar os numeros e contatenar as Strings 

console.log(d);

// interpolar utilizando a crase 

console.log(`Frase qualquer: ${a+b} é o resultado`);

// Obter dados do usuario, entramos com o nome do script e o dado que queremos processar mas para isso utilizamos process.argv[2];  

console.log("Você escreveu os parâmetros: ");
console.log(process.argv[2]);

// Use process.stdout.write(...) para escrever na tela sem quebrar linha.


// são valores Falsos: false, " " ou ' ' (string vazia), 0, NaN, undefined, null 
// as string são comparadas de acordo com os 0 e 1 
// para converter de string para Int, utilizamos o parseInt ( console.log(parseInt(x) > y);

// Copiar o IF ELSE do JAVA pois são iguais 
// Copiar o switch case do Java e testar se funciona case 1, case 2 ou se é apennas case, case, case 
// Podemos resumir o IF ELSE em apenas uma linha, exemplo:

let x;
if(y == 500){
    x= "valor a";
}
else{
    x = "Valor b";
}

// Podemos fazer assim:

let x = (y == 500)? "valor a" : "valor b";

// Loops

/*
While = enquanto ou seja, enquanto for verdadeiro, execute isto.

let i = 0;

while(i < 15){
    Console.log("Alguma coisa" + i);
    i++ ( mesma coisa de i = 0 + 1...)
}

for(Decla da variavel contadora; condição; incrementação), assim:

for(let i = 0; i < 50; i += 5){
    console.log("Alguma coisa" + i);
} 

/*
    CORES NO TERMINAL 

        // Retorna o texto em vermelho
    console.log("\033[31m Aqui esta o texto em vermelho.")

    // Retorna o texto em azul
    console.log("\033[34m Aqui esta o texto em vermelho.")

    // Volta o padrão do bash
    console.log("\033[0m Aqui estamos dando reset nas cores do bash.")


    // Criando variavel para deixar um pouco mais simples
    var red, blue, reset;
    red = '\u001b[31m';
    blue = '\u001b[34m';
    reset = '\u001b[0m';

    https://imasters.com.br/desenvolvimento/como-criar-um-console-colorido-usando-nodejs
*/


// FUNÇÕES

function ola()








