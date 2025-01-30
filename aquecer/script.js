function maioridade() {
    let resposta = window.confirm('Você é maior de idade?')
        if (resposta == true) {
            alert('Aproveite o site!')
        } else {
            alert('beleza man, bnanido :)')
            document.body.style.display = "none"
        }
}


function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var txtnome = document.getElementById('txtnome')
    var txtnas = document.getElementById('txtnas')
    var res = document.getElementById('res')
    var nome = String(txtnome.value)
    var dataNas = Number(txtnas.value)

    if (ano - dataNas < 18 && ano - dataNas > 0) {
        res.innerText = `A ${nome} seu safadinho, você tem ${ano-dataNas} anos, então é menor de idade, te peguei!`
    } else if (ano - dataNas < 0) {
        res.innerText = `IXI, ${nome} tu é um viajante do tempo truta?`
    } else if (ano - dataNas == 0) {
        res.innerText = `Recem nascido? Gugudada ${nome}`
    } else {
        res.innerText = `Seja bem vindo ${nome}, você tem ${ano-dataNas} anos, logo é maior de idade`
    }
      
}