let numeroSecreto = Math.floor(Math.random() * 100) + 1; //gera um número aleatório entre 1 e 100
let tentativas = document.getElementById('tentativas') //seleciona o elemento que exibe as tentativas
let numTentativas = 0 //numero de tentavivas com a base de 0
let resultado = document.getElementById('resultado') //seleciona o elemento que exibe o resultado
let numeroChute = document.getElementById('numero') //seleciona o elemento do numero chutado

tentativas.innerText = `Tentativas: ${numTentativas}` // exibe a tentaviva como 0

function inicio() {

    if(numeroChute.value < 1 || numeroChute.value > 100 ) { //se for menor ou maior que 100 ele execultara o código
        alert('O número digitado é invalido!')  // exibe uma mensagem alertando estar incorreto
    } else {
        chute() //chamado de outra função
    }
}

function chute() {
    numTentativas += 1 //adiciona mais 1 ao numero de tentativas
    tentativas.innerText = `Tentativas: ${numTentativas}` //exibe as tentativas novamente, pois mais foram adicionados

    if(numeroChute.value < numeroSecreto) {
        resultado.innerText = 'Errado! Tente um número maior' //se for menor ele da o erro e pede um numero maior
    } else if(numeroChute.value > numeroSecreto) {
        resultado.innerText = 'Errado! Tente um número menor' //se for maior ele da erro e pede um numero menor
    } else {
        resultado.innerText = 'PARABÉNS VOCÊ ACERTOU!' //se acertar ele exibe o parabéns
        numTentativas = 0 //reseta as tentativas
        tentativas.innerText = `Tentativas: ${numTentativas}` //exibe elas para resetar no documento html tmb
        numeroSecreto = Math.floor(Math.random() * 100) + 1 // gera outro número pra fazer o processo novamente
    }
}