//Armazenando uma função em uma variável
const imprimirSoma = function (a,b) {
    console.log(a+b)
}
imprimirSoma(2,3)
console.log()

//Armazenando uma função arrow em uma variável
const soma = (a,b) =>{
    return a+b
}
console.log(soma(1,3))
console.log()

//Retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))
console.log()

const imprimir2 = a =>console.log(a)
imprimir2("legal")
console.log()