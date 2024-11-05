// O nosso herói João chegou a uma encruzilhada na floresta misteriosa.
// Ele precisa decidir qual caminho seguir para continuar a sua jornada.

if (caminhoEsquerdo === 'obstaculo') {
    // Se o caminho da esquerda tiver um obstáculo, João vai tentar o caminho da direita.
seguirCaminhoDireito();
} else if (caminhoEsquerdo === 'ponteQuebrada') {
    // Se o caminho da esquerda tiver uma ponte quebrada, João vai procurar outro caminho.
procurarOutroCaminho();
} else {
    // Se não tiver obstáculo nem ponte quebrada no caminho da esquerda, João seguirá por esse caminho.
seguirCaminhoEsquerdo();
}

//

let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
itensComprados = "Leite"
}
else{
console.log("passou na sessão de congelados")
itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)

//

//if,else if ,else
let nivelDeFome =  "1"

if(nivelDeFome === 1){
console.log("pouca fome")
}else if(nivelDeFome ===2){
console.log("muita fome")
}else{
console.log("Você comeria mais que o pica pau")
}