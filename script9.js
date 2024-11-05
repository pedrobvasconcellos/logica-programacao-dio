// AND ( && )
let idade = 18
let vistoVerificado = false
let resultados =  (idade >= 18) && (vistoVerificado === true) 
console.log(resultados)

//

// AND ( && ) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let itens = "estrela"
let results = (moedasColetadas >= 100) && (itens === "estrela")
console.log(results)

//

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)

//

// NOT  ( !) - nega uma afirmação
let temporal = "chuva"
let resultadoTempo = tempo === "chuva"
console.log(!!resultado)

//

// NOT  ( !) - nega uma afirmação
let temporais = "chuva"
let horario = 8
let resultado = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)

