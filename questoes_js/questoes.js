alert("Exercicio 1")
function numero_maior(numero_1,numero_2) {
    var numero_1 = Number(prompt("Digite o primeiro numero"));
    var numero_2 = Number(prompt("Digite o segundo numero"));

    if (numero_1 > numero_2) {
    alert("O numero maior é: " + numero_1);
} else {
    alert("O numero maior é: " + numero_2);
    };
};

numero_maior()

alert("Exercicio 2")
function par(analise) {
    var analise = Number(prompt("Digite o numero para ver se ele é par ou impar"));

    if (analise % 2 == 0) {
        alert("O numero é par");
    } else {
        alert("O numero é impar");
    };
};

par()

alert("Exercicio 3")
function fatorial() {
    var nu = Number(prompt("Digite o numero para ver o seu fatorial: "))
    fator = 1
    for (let i = 1; i <= nu; i++) {
        fator = fator * i
    }
alert("O fator do numero é: " + fator)
}

fatorial()

alert("Exercicio 4")
function lista() {
    var ln = [];
    var soma = 0;
    var i = 0;

    while (true) {
        var n = Number(prompt("Digite um numero para adicionar à lista. Digite 0 para parar"));

        if (n == 0) {
            break;
        }

        ln.push(n);
        soma = soma + n;
        i = i + 1;
    }

    var media = soma / i;

    alert("Os numeros digitados foram: " + ln);
    alert("A média da lista é: " + media);
}

lista()

alert("Exercicio 5")
function fahcel() {
    var celsius = Number(prompt("Digite aqui a temperatura em graus celsius para converter ela para fahreinheit"))
    fahren = 0
    fahren = celsius * 1.8 + 32
    alert("A temperatura em graus celsius digitada era: " + celsius)
    alert("Ela convertida para fahreinheit ficou: " + fahren + "F")
}

fahcel()