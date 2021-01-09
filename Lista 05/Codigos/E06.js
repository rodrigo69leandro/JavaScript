/**
* 6. Dados objetos como os seguintes:
* let contaX = {
*   nome: 'José Fontes',
*   saldo: 1000
* };
* let contaY = {
*   nome: 'Felipe Silva',
*   saldo: 3000
* }
* Escreva 3 funções: deposita(conta, valor), que acrescenta o valor especificado a uma conta; retira(conta, valor), 
* que subtrai o valor especificado; e transfere(conta1, conta2, valor)
* que transfere dinheiro de uma conta a outra. Escreva código para testar as 3 funções usando os objetos acima.
*/

let contaX = {
  nome: 'José Fontes',
  saldo: 1000
};

let contaY = {
  nome: 'Felipe Silva',
  saldo: 3000
};


function deposita(Conta,valorDep){
  console.log("\033[31m Deposito \033[0m");
  Conta.saldo += valorDep;
  console.log("Deposito de " + valorDep + " reais, na conta do senhor(a) " + Conta.nome ); 
  console.log("Valor atual na conta é de: " + contaX.saldo + " Reais.")
  console.log();
};

deposita(contaX,300);


function retira(Conta,valorDep){

  Conta.saldo -= valorDep;
  console.log("\033[31m Retirada \033[0m");
  console.log("Retirada de " + valorDep + " reais, na conta do senhor(a) " + Conta.nome ); 
  console.log("Valor atual na conta é de: " + contaX.saldo + " Reais.");
  console.log();
  
  };
  
  retira(contaX,150);

  function transfere(conta1, conta2, valor){
    NovoValorConta1 = conta1.saldo - valor;
    NovoValorConta2 = conta2.saldo + valor;
    
    console.log("\033[31m Transferência \033[0m");
    console.log("Valor a ser trasferido: " + valor + " Reais");
    console.log("\033[1;36m Conta do transferente: \033[0m");
    console.log("Nome: " + conta1.nome);
    console.log("Valor em conta: " + NovoValorConta1 +" Reais");
    console.log();
    console.log("\033[0;32m Conta do recebente:\033[0m");
    console.log("Nome: " + conta2.nome);
    console.log("Valor em conta: " + NovoValorConta2 +" Reais");
    console.log();  
  }
    
    transfere(contaX, contaY, 560);
    
    
    
