function tabuada() {
    let numtxt = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (txtnum.value.length == 0) {
        window.alert('[ERRO] Nenhum número identificado!')
    } else {
        tab.innerHTML = ''
        let num = Number(numtxt.value)
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.innerText = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
}