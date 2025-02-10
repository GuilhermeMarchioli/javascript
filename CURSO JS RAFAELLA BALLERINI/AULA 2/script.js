function adicionarTarefa() {
    let msg = document.getElementById('msg')
    msg.innerText ='Tarefa adicionada com sucesso'

    let inputTarefa = document.getElementById('inputTarefa')
    let lista = document.getElementById('lista')
    
let tarefa = inputTarefa.value.trim();

    if(tarefa < 3 ) {
        msg.style.color = "darkRed"
        msg.innerText = "O item não foi adicionado a lista"
        window.alert('É necessário pelo menos 3 caracteres para ser adicionado a lista.')
    } else {
        let li = document.createElement('li')
        li.innerText = inputTarefa.value
        lista.appendChild(li)
    }

    inputTarefa.value =""
}