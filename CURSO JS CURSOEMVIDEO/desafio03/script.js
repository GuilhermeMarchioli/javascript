function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo  = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel realizar a contagem! \u{1F937}'
    } else {
        res.innerHTML = 'Contando... '
        let i = Number(inicio.value) 
        let f = Number(fim.value)
        let p = Number(passo.value)
        // se passo == 0
        if (p <= 0) {
            alert('[ERRO] O passo que você digitou é invalido, considerando PASSO = 1')
            p = 1
        } 
        // Contagem Crecente
        if(i < f) {
            for(c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1}\u{FE0F} `
            }
        //Contagem Decrecente
        } else {
            for(c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{27A1}\u{FE0F} `
            }
        }
        res.innerHTML += `\u{2705}`
    }
}