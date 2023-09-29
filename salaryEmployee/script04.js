/*Crie um novo projeto com uma página que tenha 2 campos de texto com os rótulos Nome e Salário e 1 botão com o rótulo "Adicionar". O usuário deve digitar esses valores e ao clicar em adicionar, deve ser criado um objeto com essas propriedades e valores e deve ser adicionado a um array. Na sequência, deve mostrar na tela por meio de um elemento <li>. Deve ser exibido também quem ganha o maior salário e o total de salários pagos (utilize a função reduce).
*/

//TREINANDO O USO DO LOCALSTORAGE COM O DESAFIO PROPOSTO ---------------------------------------

let ativa = document.querySelector("#adicionar")
let nomeFuncionario = document.querySelector("#nome-funcionario")
let salarioFun = document.querySelector("#salario")
let filtro = document.querySelector("#filtrar")
let saida = document.querySelector("#saida")
let somaSalarios = document.querySelector("#soma-salarios")
let maiorSalario = document.querySelector("#maior-salario")


//Recebendo do localstorage o item "listaFUncionarios"
let listaFuncionarios = JSON.parse(localStorage.getItem("listaFuncionarios"))

//Caso não exista, é criado
if (listaFuncionarios === null) {
    let array = []
    localStorage.setItem("listaFuncionarios", JSON.stringify(array))
    listaFuncionarios = JSON.parse(localStorage.getItem("listaFuncionarios"))
}

//Exibindo lista, para cada objeto da minha lista, um elemento html é criado
function exibirLista(lista) {

    saida.innerHTML = ''

    for (let funcionario of lista) {
        let item = criarHtml(funcionario.nome, funcionario.salario, funcionario.id)
        saida.innerHTML += item
    }
    somaDosSalarios()
    funcMaiorSalario()
}

//Gernando um novo id a cada execução de adiconar item
function newId() {
    return listaFuncionarios.length === 0 ? 1 : listaFuncionarios[listaFuncionarios.length - 1].id + 1;
}

function removerFuncionario(id) {
    filtro.value = ''
    //Pegando o item filtrando pelo o seu id
    let novaLista = listaFuncionarios.filter(item => (item.id === id))[0]

    //Pegando o id correspondente dentro da lista
    let indice = listaFuncionarios.indexOf(novaLista)
    //Renovando
    listaFuncionarios.splice(indice, 1)
    //Adicionando no localStorage
    localStorage.setItem("listaFuncionarios", JSON.stringify(listaFuncionarios))

    exibirLista(listaFuncionarios)
}

//Aproveitando o codigo da outra questão
function filtrar() {

        let novoArray = listaFuncionarios.filter(func => func.nome.toLowerCase().includes(filtro.value.toLowerCase()));

        exibirLista(novoArray)
}

function criarHtml(nome, salario, id) {

    //Html que será exibido
    let item = ` <li>
                    <p>Nome do funcionário: <strong>${nome}</strong></p>
                    <p>Salário: <strong> ${salario} R$</strong></p>
                    <span class="material-symbols-outlined" id="close" onclick="removerFuncionario(${id})">
                        close
                    </span>
                </li>`

    return item
}

function somaDosSalarios() {
    let soma = 0;
    for (let func of listaFuncionarios) {
        soma += Number(func.salario)
    }
    somaSalarios.innerHTML = `${soma}`  
}

function adicionarFuncionario(nome, salario) {

    //Gerando um novo id para cada execução
    let id = newId()

    //Nova lsitaFuncionarios com os valores anteriores (rest ...) mais o novo a ser adicionado
    listaFuncionarios = [...listaFuncionarios, { nome: nome, salario: salario, id: id }]

    //Setando no localStorage
    localStorage.setItem("listaFuncionarios", JSON.stringify(listaFuncionarios))

    //Criando elemento li (ul id="saida" > li)
    let item = document.createElement("li")
    saida.appendChild(item)

    nomeFuncionario.value = ''
    salarioFun.value = ''
    nomeFuncionario.focus()
    exibirLista(listaFuncionarios)
}

//Nome do mais bem pago
function funcMaiorSalario() {
    let maior = 0
    let nomeMaior = 'Lista vazia'
    for (let funcionario of listaFuncionarios) {
        console.log(funcionario.salario)
        if (funcionario.salario >= maior) {
             maior = funcionario.salario
             nomeMaior = funcionario.nome
        }
    }
    maiorSalario.innerHTML = nomeMaior
}

ativa.addEventListener("click", () => adicionarFuncionario(nomeFuncionario.value, salario.value))

nomeFuncionario.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        salarioFun.focus()
    }
})

filtro.addEventListener("keyup", filtrar)
exibirLista(listaFuncionarios)
//localStorage.removeItem("listaFuncionarios")