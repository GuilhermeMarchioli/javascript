 let amigo = {nome:'Junior', genero:'M', idade:'27', tamanho: 1.85, peso:77, engordar(p=0){console.log('Engordou')
    this.peso += p}}

 if (amigo.tamanho > 1.70) {
    console.log(`Nossa ${amigo.nome} é alto!`)
 } else {
    console.log(`Nossa ${amigo.nome} é baixo!`)
 }

 console.log(amigo)
 amigo.engordar(2)
 console.log(`${amigo.nome} pesa ${amigo.peso}kg`)