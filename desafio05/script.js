let num = document.getElementById('txtnum')
let lista = document.getElementById('select')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo ok') 
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}