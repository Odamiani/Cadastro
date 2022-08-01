let numtxt = document.getElementById('numtxt')
let lista = document.getElementById('lista')
let res = document.querySelector('div#res')
let valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } 
    else{
        return false
    }

}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else{
        return false
    }

}

function cadastrar(){    
    if(isNum(numtxt.value) && !inLista(numtxt.value, valores)){
        valores.push(Number(numtxt.value))
        let item = document.createElement('option')
        item.text = `Valor ${numtxt.value} cadastrado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista')

    }
    numtxt.value = ''
    numtxt.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores na lista')
    }
    else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram cadastrados ${total} valores</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores cadastrados é ${media}</p>`
    }

}