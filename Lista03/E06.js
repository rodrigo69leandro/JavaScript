/**
 * 6. Modifique novamente a questão anterior, agora para a seguinte saída:
 * * * * * *
 * * * * *
 * * * * 
 * * * 
 * * 
 */

 for(let cont = 5; cont >=0 ;cont--){
    for(let conta = 1; conta <=cont; conta++){
        process.stdout.write(" *" );
    }
    console.log();
    } 