// DESAFIO

// querries CSS das coisas que precisam mudar o texto
const mudarTexto = [
  '#meu-nav > h2',
  '#tabela-total > th',

  '#meu-container',
  '#minha-linda-tabela',
  "#table-colunas > *",
]

// querries CSS das coisas que precisam mudar o background
const mudarBg = [
  '.main',
  '#minha-linda-tabela',
  "#table-colunas > *",
]

// função que pega uma array de querries e retorna a lista das classLists dos elementos dessas querries
const getClassList = querryArr => querryArr
  .map(query => document.querySelectorAll(query))
  .map(list => Array.from(list))
  .flat()
  .map(coisa => coisa.classList)

// pegando referência aos classLists das coisas
const mudarTextoClassLists = getClassList(mudarTexto)
const mudarBgClassLists    = getClassList(mudarBg)

// pegando referência ao botão
const darkBtn = document.querySelector("#toggle-dark-mode > button")

// adicionando o event listener
darkBtn.onclick = () => {
  // mudar os backgrounds
  mudarBgClassLists.map(coisa => {
    coisa.toggle('bg-dark')
    coisa.toggle('bg-light')
  })

  // mudar os textos
  mudarTextoClassLists.map(coisa => {
    coisa.toggle('text-dark')
    coisa.toggle('text-light')
  })

  // mudar o botão
  darkBtn.classList.toggle('btn-dark')
  darkBtn.classList.toggle('btn-light')
}