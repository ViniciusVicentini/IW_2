console.log("Atividade realizada por: Vinicius Vicentini, 2C")
console.log("Atividade realizada por: Mariana de Couto, 2C")

var numero = prompt("Digite um numero");
if (numero % 2 == 0){
    alert ("o numero é par");
} else {
    alert ("o numero é impar");
}


var idade = prompt("Qual  a sua idade?");
if (idade <= 0){
    alert("Idade Inválida");
}   if (idade >= 18){
        alert("Maior de idade");
}   else {
        alert("Menor de Idade");
}

console.log("for 1 -- 10");

for (var i = 1; i < 11; i ++) {
    console.log(i)
};

console.log("while contagem regressiva");

var cont = prompt("digite um numero para a contagem regressiva");
while(cont >= 0){
    console.log(cont)
    cont = cont - 1;
}

console.log("tabuada");
var tabu = prompt("Digite um numero para começar a tabuada de 1 a 10");
for (var i = 1; i < 11; i ++) {
    var mult = i * tabu;
    console.log(tabu,'x', i, '=',  mult);
};

console.log("soma acumulativa");

var somat = prompt("Digite um numero e some de 1 até ele");
var acum = 0;
for(var i = 1; i <= somat; i++){
    acum = acum + i;
    console.log(acum);
}

var n = prompt("Digite um numero para saber se ele é primo ou não");
if (n % 2 == 1){
    console.log("O numero",n, "não é primo");

} else{
    console.log("O numero",n, "é primo");
}


var usuario = prompt("Digite seu nome de usuario");
var senhausuario = prompt("Digite a senha");
var senha = "1234senha";
while(senha != senhausuario){
    senhausuario = prompt("Senha incoreta. Digite novamente");
}
alert("Senha correta");

console.log("soma de positivos");

var contapositivos = 0
var somapositivos = prompt("digite numeros positivos para somar, pare a conta digitando um numero negativo.");
while (somapositivos >= 0){
    var somapositivos = prompt("digite numeros positivos para somar, pare a conta digitando um numero negativo.");
    var somapositivos = parseFloat(somapositivos);
    contapositivos = contapositivos + somapositivos;
}
console.log("a soma desses numeros é", contapositivos);

console.log("adivinhação");

let numerosec = Math.floor(Math.random() * 10) + 1;
var adivinhacao = prompt("tente adivinhar o numero escolhido")
if (adivinhacao < numerosec) {
    var adivinhacao = prompt("o numero é maior");     
} if (adivinhacao > numerosec) {
    var adivinhacao = prompt("o numero é menor");  
} else {
    alert("numero correto");
}

console.log("Fatorial");

let numero3 = parseInt(prompt("digite um número:"));
let fatorial = 1;

for (let i = 1; i <= numero3; i++) {
    fatorial = fatorial * i;
}

alert("o fatorial do " + numero3 + " é " + fatorial);

console.log("Validação de Nota")

let nota;

while (nota < 0 || nota > 10 || isNaN(nota)) {
    nota = parseFloat(prompt("digite uma nota entre 0 e 10:"));
}

alert("Nota válida: " + nota);

console.log("Média das Notas")

let nota_1 = parseFloat(prompt("Digite a primeira nota:"));
let nota_2 = parseFloat(prompt("Digite a segunda nota:"));
let nota_3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota_1 + nota_2 + nota_3) / 3;

alert("Média: " + media);

if (media >= 7) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}

console.log("Caixa Eletrônico")

let valor = parseInt(prompt("Digite o valor do saque:"));

let nota100 = Math.floor(valor / 100);
valor = valor % 100;

let nota50 = Math.floor(valor / 50);
valor = valor % 50;

let nota20 = Math.floor(valor / 20);
valor = valor % 20;

let nota10 = Math.floor(valor / 10);
valor = valor % 10;

let nota5 = Math.floor(valor / 5);
valor = valor % 5;

let nota2 = Math.floor(valor / 2);
valor = valor % 2;

let nota1 = Math.floor(valor / 1);

alert(
    "Notas de 100: " + nota100 + "\n" +
    "Notas de 50: " + nota50 + "\n" +
    "Notas de 20: " + nota20 + "\n" +
    "Notas de 10: " + nota10 + "\n" +
    "Notas de 5: " + nota5 + "\n" +
    "Notas de 2: " + nota2 + "\n" +
    "Notas de 1: " + nota1
);

console.log("Numeros Impares")

let numer = parseInt(prompt("Digite um número:"));
let resultado = "";

for (let i = 1; i <= numer; i++) {
    if (i % 2 != 0) {
        resultado = resultado + i + " ";
    }
}

alert("Números ímpares: " + resultado);
