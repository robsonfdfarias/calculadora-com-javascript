//tipos de função

//declarativas
function funcao(){
    console.log('Sou uma mensagem de uma função declarativa');
}
funcao();

//Expressões de funções podem ter nome, mas também podem ser declaradas sem nome pois são atribuidas a variáveis
var variavelFuncao = function(){
    console.log('Sou uma mensagem de uma Expressão de função');
};
variavelFuncao();

//Arrow Function - São funções de expressão de sintaxe curta. São sempre anônimas, e portanto não podem ser nomeadas. Deve ser declarado com parênteses "()", seguido de "=>" e depois chaves "{}"
var anonimo = ()=>{
    console.log('Sou uma mensagem de uma Arrow Function');
}
anonimo();