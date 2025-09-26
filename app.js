//!PRINCIPAL

function sortear() {
    let verificacao;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        verificacao = 1
        alert('O Número MINIMO deve ser MENOR que o número MÁXIMO!')
        return
    }
    else  {
        verificacao = 2
    }


if (verificacao == 2) {
    let quantidade = parseInt(document.getElementById('quantidade').value); //!recuperar o valor
    let sorteados = [];
    let numero;

if (quantidade > (ate - de)){
    alert('A quantidade de números a serem sorteados é maior que os números possíveis pelo intervalo.')
}
else {

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate)
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            
        }
        sorteados.push(numero);
        
    }

    let resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao()
}
}
}

//!FUNCOES 

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao')
    }
    botao.addEventListener('click', function() {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado')
        
    });

}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);

}