// 3. Modifique a questão anterior para percorrer o objeto com uma estrutura de loop e escrever na saída automaticamente todas as propriedades e valores, uma por linha.

let livro = {
    titulo : "Briga de cachorro grande",
    Autor : "Fred Vogelsten",
    Qntpaginas : 520
}

for(let liv in livro){

console.log(`${liv}: ${livro[liv]}`);

}