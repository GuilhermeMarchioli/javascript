function adicionarTarefa() {
    let msg = document.getElementById('msg')
    msg.innerText ='Tarefa adicionada com sucesso'

    let inputTarefa = document.getElementById('inputTarefa')
    let lista = document.getElementById('lista')
    
    if(inputTarefa.value.length < 3) {
        window.alert('É necessário pelo menos 3 caracteres para ser adicionado a lista.')
    } else {
        let li = document.createElement('li')
        li.innerText = inputTarefa.value
        lista.appendChild(li)
    }

    inputTarefa.value =""
}