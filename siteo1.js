function contar() {
    let inicioElem = document.getElementById('txti')
    let fimElem = document.getElementById('txtf')
    let passoElem = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicioElem.value.length == 0 || fimElem.value.length == 0 || passoElem.value.length == 0) {
        window.alert('Erro, faltam dados')
    } else {
        res.innerHTML = 'Contando...<br>'
        let inicio = Number(inicioElem.value)
        let fim = Number(fimElem.value)                                                                 //Isso tudo, é para fazer o layout do contador!
        let passo = Number(passoElem.value)

        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }

        for (let contador = inicio; contador <= fim; contador += passo) {
            res.innerHTML += `${contador} "\u{1f449}" ` //esse é o codigo do emoji!
        }
    }
}



    








