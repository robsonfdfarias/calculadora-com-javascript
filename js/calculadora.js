//Number() - para converter valores em numeros
//Prompt() - para registrar entradas de usuários
//Alert() - para mostrar mensagem ao usuário
//Template Strings - para usar strings junto com expressões

function calculadora(){

    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

    if(!operacao || operacao >= 7 || operacao <= 0){
        alert("Operação inválida!!! Por favor, insira apenas os números entre 1 e 6.");
        calculadora();
    }else{
        let n1 = Number(prompt("Insira o primeiro valor:"));
        while (!n1){
            alert("Por favor, insira um número válido.");
            n1 = Number(prompt("Insira o primeiro valor:"));
        }
        let n2 = Number(prompt("Insira o segundo valor:"));
        while (!n2){
            alert("Por favor, insira um número válido.");
            n2 = Number(prompt("Insira o segundo valor:"));
        }
        var resultado;

        if(operacao == 1 || operacao == '+'){
            resultado = soma(n1,n2);
        }else if(operacao == 2 || operacao == '-'){
            resultado = subtracao(n1,n2);
        }else if(operacao == 3 || operacao == '*'){
            resultado = multiplicacao(n1,n2);
        }else if(operacao == 4 || operacao == '/'){
            resultado = divisaoReal(n1,n2);
        }else if(operacao == 5 || operacao == '%'){
            resultado = divisaoInteira(n1,n2);
        }else if(operacao == 6 || operacao == '**'){
            resultado = potenciacao(n1,n2);
        }

        var div = document.getElementById('resultado');
        div.innerHTML = "Resultado: "+resultado;
        novaOperacao();
    }
}
calculadora();

function soma(n1, n2){
    var resultado = n1+n2;
    //Template Strings - para usar strings junto com expressões
    var tt = `${n1} + ${n2} = ${resultado}`;
    alert(tt);
    return tt;
}

function subtracao(n1, n2){
    var resultado = n1-n2;
    //Template Strings - para usar strings junto com expressões
    var tt = `${n1} - ${n2} = ${resultado}`;
    alert(tt);
    return tt;
}

function multiplicacao(n1, n2){
    var resultado = n1*n2;
    //Template Strings - para usar strings junto com expressões
    var tt = `${n1} * ${n2} = ${resultado}`;
    alert(tt);
    return tt;
}

function divisaoReal(n1, n2){
    var resultado = n1/n2;
    //Template Strings - para usar strings junto com expressões
    var tt = `${n1} / ${n2} = ${resultado}`;
    alert(tt);
    return tt;
}

function divisaoInteira(n1, n2){
    var resultado = n1%n2;
    //Template Strings - para usar strings junto com expressões
    var tt = `${n1} % ${n2} = ${resultado}`;
    alert(tt);
    return `O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`;
}

function potenciacao(n1, n2){
    var resultado = n1**n2;
    //Template Strings - para usar strings junto com expressões
    var tt = `${n1} ** ${n2} = ${resultado}`;
    alert(tt);
    return `${n1} elevado a ${n2}ª é igual a ${resultado}`;
}

function novaOperacao(){
    let opcao = prompt("Deseja fazer uma nova operação? \n 1 - Sim \n 2 - Não");
    if(opcao == 1 || opcao == 'Sim' || opcao == 'sim'){
        calculadora();
    }else{
        alert("Obrigado por usar nossos serviços!");
    }
}