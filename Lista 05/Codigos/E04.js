// 4. Escreva uma função chamada obterDescricao que receba um objeto livro e retorne 
// uma string com uma descrição do livro 
//(ex.: "Dom Casmurro, autor: Machado de Assis, 256 páginas"). 
//Teste a função passando como parâmetros ao menos dois objetos diferentes.

let livro1 = {
    titulo : "Steven Jobs",
    Autor : "Walter Isaacson",
    Qntpaginas : 608
}

function obterDescricao(livro){
    return `Titulo: ${livro.titulo}, Autor: ${livro.Autor}, Quantidade de páginas: ${livro.Qntpaginas} ` ;
}

console.log(obterDescricao(livro1));





