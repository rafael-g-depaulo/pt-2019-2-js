const tableLines = Array
  .from( document
    .querySelector("#minha-linda-tabela")
    .rows
  )

tableLines
  .forEach((line, i) => line.firstElementChild.innerText = i + 1)