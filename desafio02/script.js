function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.getElementById('txtano')
    var anoNas = nas.value
    var res = document.getElementById('res')
    var p = document.getElementById('detect')

    if (anoNas == 0 || anoNas > ano) {
        window.alert('[ERRO] Verifique se os dados foram preenchidos corretamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoNas)
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15) {
                // Criança
                res.style.backgroundImage = "url(imagens/criança-m.jpg)"
            } else if (idade < 26) {
                // Jovem
                res.style.backgroundImage = "url(imagens/jovem-m.jpg)"
            } else if (idade < 60) {
                // Adulto
                res.style.backgroundImage = "url(imagens/adulto-m.jpg)"
            } else {
                // Idoso
                res.style.backgroundImage = "url(imagens/idoso-m.jpg)"
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 16) {
                // Criança
                res.style.backgroundImage = "url(imagens/criança-f.jpg)"
            } else if (idade < 26) {
                // Jovem
                res.style.backgroundImage = "url(imagens/jovem-f.jpg)"
            } else if (idade < 60) {
                // Adulto
                res.style.backgroundImage = "url(imagens/adulta-f.jpg)"
            } else {
                // Idoso
                res.style.backgroundImage = "url(imagens/idosa-f.jpg)"
            }
        }
        p.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    }

}