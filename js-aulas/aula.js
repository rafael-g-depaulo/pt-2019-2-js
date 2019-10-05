// if's
if (cond) {

} else if (outra_cond) {

} else {

}

// comentários
/** comentários */

// switch case
switch (a) {
  case '1':
    break
  default:
    break
}

// loops
while (!false) {
  break
}
do {} while (true && true)
for (let i = 0; i < 10; i--) {

}

// variáveis e constantes
var x = 10
let y = 11
const z = "oi sdds"


// JAVASCRIPT *NÃO* TEM TIPOS!!!
console.log(x) //? 10
x = "dez"
console.log(x) //? "dez"
x = [10, "dez"]
console.log(x) //? [10, "dez"]
x = {
  nome: "dez"
}
console.log(x) //? { nome: "dez" }


// JAVASCRIPT *TEM* TIPOS?!?

// numeros
x = 10 - 20.5

// strings
x = "assim"
x = 'assim'
x = `e tbm dessa forma`

// booleanos
x = false || true

// e um bando de nadas
x = undefined
x = null

// arrays
// def: uma lista de "valores válidos"
x = [1, 2, 3, "quatro", [5, 6]]
x[7] = "oito"
console.log(x) //? [1, 2, 3, "quatro", undefined, undefined, undefined, "oito"]

// objetos (dica: é um mapa)
// def: uma lista de pares (chave: valor)
// chave é uma string
// valor é um "valor válido"
const mario = {
  name: "mario",
  idade: 88,
  hasBigodao: true,
  irmao: {
    nome: "luigi",
    hasBigodao: "claro que tem"
  }
}

mario.hasBigodao = false
mario.irmao.hasBigodao = true