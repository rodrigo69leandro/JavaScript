
/**
 * 4. Escreva um script que gere o seguinte padrão na tela, escrevendo apenas um caractere '*' por instrução e utilizando dois loops for, um dentro do outro:
 * * * * * * 
 * * * * * *  
 * * * * * *  
 * * * * * * 
 * * * * * * 
 */

for(let cont = 0; cont <5; cont++){
    for(let conta = 0; conta <5; conta++){
        process.stdout.write(" *");
    }
    console.log();
    }