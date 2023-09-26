// Crie um novo projeto com uma página que tenha 2 campos de texto e 1 botão com o rótulo "Achar". O usuário deve digitar um conjunto de números separados por um "separador"  na primeira caixa de texto e informar o "separador" na segunda caixa e ao clicar no botão, deve ser mostrado em um elemento na tela o maior e o menor número digitado.

// Exemplo: Números "2, 4, 5, 10, 1" e separador "," devem informar os números 1 e 10 como menor e maior, respectivamente.
// Para essa questão, crie um ouvinte de evento no referido botão que busca os valores digitados e os separa.

let separador = document.querySelector("#separador")
let numeros = document.querySelector("#num")
let saida = document.querySelector("#saida")

const ativar = document.querySelector("#achar")

ativar.addEventListener("click",() => {

    let vetor = numeros.value.split(separador.value)
    let min = Math.min(...vetor)
    let max = Math.max(...vetor)

    saida.innerHTML = `Menor = ${min} e maior = ${max}`

    separador.value = ' '
    numeros.value = ' '
    separador.focus()
})


