/*Crie um novo projeto com uma página que tenha apenas um campo de texto, onde o usuário deverá digitar uma Tarefa a ser adicionada quando ele pressionar a tecla "Enter". Mostre a lista de tarefas logo abaixo do campo de texto, apresentando uma opção de "Remover" a tarefa, com um botão ou um ícone como um X. Ao clicar, a tarefa em questão deve ser retirada da lista de tarefas.*/

//Aproveitando e treinando o uso do LOCALSTORAGE

let item = document.querySelector("#todo")
let printar = document.querySelector("#saida")

//Pegando o item "lista"
let lista = JSON.parse(localStorage.getItem("lista"))

//Caso não exista,  (lista = "null"), a mesma é criada
if (lista === null) {
    let array = []
    localStorage.setItem("lista", JSON.stringify(array))
    lista = JSON.parse(localStorage.getItem("lista"))
}

//Exibindo valores para o usuário
function exibirValores() {
    printar.textContent = ' '
    for (let item in lista) {
        printar.innerHTML += `<li>

            <p>${lista[item]}</p>

            <span class="material-symbols-outlined" onclick="deletar(${item})">
                close
            </span>

        </li>`
    }
    item.value = ' '
    item.focus()
}

//Deletando um item
function deletar(indice) {
    lista.splice(indice, 1)
    localStorage.setItem("lista", JSON.stringify(lista))
    exibirValores()
}

//Evento para adicionar e logo em seguida exibir a lista com os itens
item.addEventListener("keydown", (e) => {
    if (e.key === 'Enter' && item.value != '') {
        lista = [...lista, item.value]
        localStorage.setItem("lista", JSON.stringify(lista))
        exibirValores()
    }

    
})

exibirValores()