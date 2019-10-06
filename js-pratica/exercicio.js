// EXERCÍCIO

// pegando referência às linhas da tabela
const tableRows = Array.from(document.querySelector('#minha-linda-tabela').lastElementChild.rows)

// adicionando as classes
tableRows
  .filter(item => item.id !== 'tabela-total')
  .forEach(row => {
    if (row.lastElementChild.innerText.includes('-')) {
      row.classList.add('table-danger')
    } else {
      row.classList.add('table-success')
    }
  })

// pegando referência para o nó onde escrever o total
const totalNode = document.querySelector('#tabela-total')

// calculando o total
const total = tableRows
  .filter(item => item.id !== 'tabela-total')
  .map(item => item.lastElementChild.innerText)
  .map(string => Number(string))
  .reduce((acc, valor) => acc + valor)

// escrevendo o total
totalNode.lastElementChild.innerText = `R$ ${total.toFixed(2)}`
