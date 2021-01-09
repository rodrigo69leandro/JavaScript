// 5. Escreva uma função chamada criaLivro que receba 3 parâmetros: título, autor e número de páginas e retorne um objeto livro com os respectivos valores.
// Teste o objeto criado, passando-o como parâmetro para a função da questão anterior.

function criaLivro(t,a,QP){
    
    return {
            titulo : t,
            autor : a,
            Qntpaginas : QP   
    }
}
let novoLivro = criaLivro("Rodrigo", "Fulano", 520);

let descrição = obterDescricao(novoLivro);

console.log(descrição);



