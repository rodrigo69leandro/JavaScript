
/**
 * 5. Modifique a questão anterior (mantendo a mesma estrutura de loops) para que a saída seja a seguinte:
 * *
 * * * 
 * * * * 
 * * * * * 
 * * * * * *
 */

for(let cont = 0; cont <5; cont++){
    for(let conta = 0; conta <=cont; conta++){
        process.stdout.write(" *");
    }
    console.log();
    } 