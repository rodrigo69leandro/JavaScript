
/**
 * 7. Modifique a questão anterior, para que o número de linhas e o número de asteriscos por linha sejam determinados por um parâmetro de linha de comando
 */

for(let cont = process.argv[2]; cont >=0 ;cont--){
    for(let conta = 1; conta <=cont; conta++){
        process.stdout.write(" *" );
    }
    console.log();
    } 