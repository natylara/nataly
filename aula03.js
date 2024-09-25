// Alguns erros

let numero = 12 // O javaScript é sensível ao capslock
//conse.log(numero) // Erro de declaração, varíavel não declarada

//console.log(numero // Erro de sintaxe, faltas de parenteses

// Tratamento de erros
//console.error('A lista não está executando a média') // Declara um erro para outro usúario;

const idadeMinima = 18 
let idadeCliente = 17

if(idadeCliente >= idadeMinima){
    console.log('Corote')
} else{
    console.log('Suco')
}
// Valor ternário
idadeCliente = 20

// modo ternário,_______<=_______? ------- : -------
// modo ternário,_______==_______? ------- : -------
console.log(idadeCliente >= idadeMinima ? 'Corote' : 'Suco')
                    //  => uma função arrow, completamente diferente de maior igual

  //utilizar com cuidado

  const nome = "teotonio"
  const idade = 16
  const cidadeNascimento = "Foz do Iguaçu"

  const apresentacao = "Meu nome é " + nome + "tenho " + idade + " anos e nasci em " + cidadeNascimento

  console.log(apresentacao)

  // Template string

  const apresentacaoII =`Sou o ${nome} e tenho ${ idade} anos de idade. Nasci na cidade de ${cidadeNascimento}`

  console.log(apresentacaoII)