var txtnum = document.getElementById('txtnum');
var select = document.getElementById('select');
var res = document.getElementById('res')
var num = [];

function add() {
    if (txtnum.value.length == 0 || txtnum.value > 100 || txtnum.value < 1 || num.includes(Number(txtnum.value))) {
        window.alert('[ERRO] O número digitado é inválido, ou já está presente na lista!');
    } else {
        num.push(Number(txtnum.value));
        let item = document.createElement('option');
        item.innerText = `Valor ${txtnum.value} adicionado`;
        select.appendChild(item);
    }
}

function finalizar() {
      if (select.options.length == 0) {
        alert('[ERRO] A lista está vazia!')
      } else {
        num.sort()
        let maiorNum = num[num.length - 1]
        let soma = num.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        res.innerHTML += `<p>Ao todo temos ${num.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorNum}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${num[0]}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p`
        res.innerHTML += `<p>A média dos valores é ${soma/num.length}`
      }
    }