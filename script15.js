let userName = getFirstName("Carlos-Almeida-Juanito-Gargalo", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Felipe Silva Han Solo", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
	let firstName = name.split(splitChar)[0]
    return firstName
}

function somar(numero1, numero2) {
    return numero1 + numero2;
}
  
  let resultado = somar(5, 3); // A função vai dar de presente 5 + 3 = 8
  console.log("A soma é: " + resultado); // Vai mostrar A soma é: 8
  