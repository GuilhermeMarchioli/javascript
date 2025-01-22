function  carregarPag() {
    var mnsg = window.document.getElementById('tempo')
    var img = window.document.getElementById('foto')
    var p = window.document.getElementsByTagName('p')[0]
    var hoje = new Date()
    var hora = hoje.getHours()
    var minuto = hoje.getMinutes()

    mnsg.innerHTML = `<p>Agora são exatamente ${hora} horas e ${minuto} minutos!`

    if (hora < 12) {
        img.style.backgroundImage = "url(imagens/Manhã.jpg)"
        document.body.style.backgroundColor = "lightyellow"
    } else if (hora < 19) {
        img.style.backgroundImage = "url(imagens/Tarde.jpg)"
        document.body.style.backgroundColor = "lightblue"
    } else {
        img.style.backgroundImage = "url(imagens/Noite.jpg)"
        document.body.style.backgroundColor = "slateblue"
    }

    if (hora < 12) {
        p.innerText = `Bom Dia!`
    } else if (hora < 19) {
        p.innerText = `Boa Tarde!`
    } else {
        p.innerText = `Boa Noite!`
    }
}