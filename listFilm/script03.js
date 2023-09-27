/*Crie uma cópia desse exemplo no seu Codesandbox e crie uma página que exiba todos os filmes contidos na constante filmes. A página também tem que ter 1 campo de texto que ao passo que o usuário digita (evento keyup), ele deve "filtrar" (com o método filter) os filmes exibidos de acordo com o texto. Para comparar os textos, utilize a função "includes''. Desconsidere maiúsculas e minúsculas. Caso não seja digitado nenhum texto, a página deve exibir todos os filmes novamente.*/

let saida = document.querySelector("#saida")
let filtro = document.querySelector("#procurar")

const filmes = [{
    "titulo": "Dawn of the Planet of the Apes",
    "lancamento": 2014,
},
{
    "titulo": "District 9",
    "lancamento": 2009,
},
{
    "titulo": "Transformers: Age of Extinction",
    "lancamento": 2014,
},
{
    "titulo": "X-Men: Days of Future Past",
    "lancamento": 2014,
},
{
    "titulo": "The Machinist",
    "lancamento": 2004,
},
{
    "titulo": "The Last Samurai",
    "lancamento": 2003,
},
{
    "titulo": "The Amazing Spider-Man 2",
    "lancamento": 2014,
},
{
    "titulo": "Tangled",
    "lancamento": 2010,
},
{
    "titulo": "Rush",
    "lancamento": 2013,
},
{
    "titulo": "Drag Me to Hell",
    "lancamento": 2009,
},
{
    "titulo": "Despicable Me 2",
    "lancamento": 2013,
},
{
    "titulo": "Kill Bill: Vol. 1",
    "lancamento": 2003,
},
{
    "titulo": "A Bug's Life",
    "lancamento": 1998,
},
{
    "titulo": "Life of Brian",
    "lancamento": 1972,
},
{
    "titulo": "How to Train Your Dragon",
    "lancamento": 2010,
}];


function filtrar() {
    saida.innerHTML = ' '

    //filme dentro do filter é o item do array filmes, e essa condição, ja serve como teste (retornando bool), 
    let novoArray = filmes.filter(filme => filme.titulo.toLowerCase().includes(filtro.value.toLowerCase()));

    for (let film of novoArray) {
        saida.innerHTML += `<p>${film.titulo}   --   ${film.lancamento} </p>`
    }
}


filtro.addEventListener("keyup", filtrar)
filtrar()

window.onload = () => filtro.focus()

