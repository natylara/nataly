// Funções

let x = 'nada'
console.log(x)

x = 'oi'
imprimeTexto(x)
console.log(x)

// Declarar uma função
// estrutura nomeDaFunção (parametros) {funcionalidade}
function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto('Sou professor de front-end')
imprimeTexto('Olá mundo')

function soma() {
    return 2+2
}
 imprimeTexto(soma())
 //console.log(soma())

 //Função com dois paramatros 
 function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
 }

 imprimeTexto(somaDeNumeros(10, 8))

 function divisaoDeNumeros(numero1, numero2){
    return numero1 / numero2
 }

 imprimeTexto(divisaoDeNumeros(10, 2))
 imprimeTexto(divisaoDeNumeros(2, 10))

 // Ordem de parametros 

 function apresentacao(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos.`
 }

 imprimeTexto(apresentacao('nataly', 16))
 imprimeTexto(apresentacao(16, 'nataly')) // A ordem dos parametros é importante 

 // parametros inicial, para que a função com um parametro pré definido
 function multiplicacao(n1 = 1, n2 = 1){
    return n1 * n2
 }

 imprimeTexto(multiplicação(2, 5))

