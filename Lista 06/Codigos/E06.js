/**
 * 6. Escreva uma função que receba um array de objetos como o do slide 14 e escreva na tela de forma organizada todas as informações que ele contém.
 */
let usuarios = [
    {
        nome: 'Rodrigo Melo Fernandes',
        email: 'rodrigo1999@zzzmail.com',
        categorias: ['premium', 'admin', 'proprietario'],
    },
    {
        nome: 'Letícia Goncalves Azevedo',
        email: 'lga@dayrep.com',
        categorias: ['admin'],
    },
    {
        nome: 'Pedro Almeida Oliveira',
        email: 'poliv3@armyspy.com',
        categorias: ['premium', 'promocao'],
    }
   ];
   
   for(let usuario of usuarios){
       console.log("Nome:", usuario.nome);
       console.log("Email:", usuario.email);
       console.log("Categorias:");
       for (let cont of usuario.categorias){
           console.log(" - "+ cont);
       }
       console.log();
   }