/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function funcParImpar() {
    let numero = parseInt(document.getElementById("inParImpar").value);
    let res = document.getElementById("resParImpar");
    if (numero % 2 === 0) {
        res.innerHTML = "O número é PAR";
    } else {
        res.innerHTML = "O número é ÍMPAR";
    }
}

// 2. Maioridade
function funcMaioridade() {
    let idade = parseInt(document.getElementById("inMaioridade").value);
    let res = document.getElementById("resMaioridade");
    if (idade <= 0) {
        res.innerHTML = "Idade Inválida";
    } else if (idade >= 18) {
        res.innerHTML = "Maior de idade";
    } else {
        res.innerHTML = "Menor de Idade";
    }
}

function funcContagem() {
    // Pega o número que você digitou no input
    let limite = parseInt(document.getElementById("inContagem").value);
    let res = document.getElementById("resContagem");
    
    // Verifica se a pessoa esqueceu de digitar ou digitou número negativo/zero
    if (isNaN(limite) || limite <= 0) {
        res.innerHTML = "Digite um número maior que zero!";
        return; // Faz o código parar aqui se der erro
    }

    let texto = "";
    
    // O 'for' agora vai de 1 até a variável 'limite'
    for (let i = 1; i <= limite; i++) {
        texto += i + " "; // Vai juntando os números: "1 2 3 4..."
    }
    
    // Joga o resultado na tela
    res.innerHTML = texto;
}

// 4. Contagem Regressiva
function funcRegressiva() {
    let cont = parseInt(document.getElementById("inRegressiva").value);
    let res = document.getElementById("resRegressiva");
    let texto = "";
    while(cont >= 0){
        texto += cont + " ";
        cont--;
    }
    res.innerHTML = texto;
}

// 5. Tabuada
function funcTabuada() {
    let tabu = parseInt(document.getElementById("inTabuada").value);
    let res = document.getElementById("resTabuada");
    let texto = "";
    for (let i = 1; i <= 10; i++) {
        texto += tabu + " x " + i + " = " + (tabu * i) + "<br>"; // <br> pula linha no HTML
    }
    res.innerHTML = texto;
}

// 6. Somatório
function funcSomatorio() {
    let somat = parseInt(document.getElementById("inSomatorio").value);
    let res = document.getElementById("resSomatorio");
    let acum = 0;
    for(let i = 1; i <= somat; i++){
        acum = acum + i;
    }
    res.innerHTML = "Soma total: " + acum;
}

// 7. Número Primo (Dei uma pequena corrigida na lógica matemática aqui)
function funcPrimo() {
    let n = parseInt(document.getElementById("inPrimo").value);
    let res = document.getElementById("resPrimo");
    let divisores = 0;
    
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) divisores++;
    }
    
    if (divisores === 2) {
        res.innerHTML = "O número " + n + " é PRIMO";
    } else {
        res.innerHTML = "O número " + n + " NÃO é primo";
    }
}

// 8. Login Simples (Adaptado para pegar dois inputs de uma vez)
function funcLogin() {
    let usuario = document.getElementById("inUsuario").value;
    let senhaDigitada = document.getElementById("inSenha").value;
    let res = document.getElementById("resLogin");
    
    let senhaCerta = "1234senha";
    
    if(senhaDigitada === senhaCerta) {
        res.innerHTML = "Bem-vindo, " + usuario + "! Senha correta.";
        res.style.color = "green";
    } else {
        res.innerHTML = "Senha incorreta. Tente novamente.";
        res.style.color = "red";
    }
}

// 9. Soma de Positivos (Mantive o prompt para não bagunçar sua lógica de loop)
function funcSomaPositivos() {
    let contapositivos = 0;
    let res = document.getElementById("resSomaPositivos");
    
    let numeroDigitado = parseFloat(prompt("Digite um número positivo (ou negativo para parar):"));
    
    while (numeroDigitado >= 0) {
        contapositivos += numeroDigitado;
        numeroDigitado = parseFloat(prompt("Soma atual: " + contapositivos + ". Digite outro positivo (ou negativo para parar):"));
    }
    res.innerHTML = "A soma final é: " + contapositivos;
}

// 10. Adivinhação
function funcAdivinhacao() {
    let res = document.getElementById("resAdivinhacao");
    let numerosec = Math.floor(Math.random() * 10) + 1;
    let acertou = false;
    
    let tentativa = prompt("Tente adivinhar o número de 1 a 10:");
    
    while(!acertou) {
        if (tentativa === null) break; // Se a pessoa cancelar
        if (tentativa < numerosec) {
            tentativa = prompt("O número é MAIOR! Tente de novo:");     
        } else if (tentativa > numerosec) {
            tentativa = prompt("O número é MENOR! Tente de novo:");  
        } else {
            res.innerHTML = "Parabéns! O número era " + numerosec;
            acertou = true;
        }
    }
}

// 11. Fatorial
function funcFatorial() {
    let num = parseInt(document.getElementById("inFatorial").value);
    let res = document.getElementById("resFatorial");
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
    res.innerHTML = "O fatorial é: " + fatorial;
}

// 12. Validação de Nota
function funcValidaNota() {
    let nota = parseFloat(document.getElementById("inNota").value);
    let res = document.getElementById("resValidaNota");
    
    if (nota >= 0 && nota <= 10) {
        res.innerHTML = "Nota válida: " + nota;
    } else {
        res.innerHTML = "Nota inválida! Digite entre 0 e 10.";
    }
}

// 13. Média das Notas
function funcMedia() {
    let n1 = parseFloat(document.getElementById("inNota1").value);
    let n2 = parseFloat(document.getElementById("inNota2").value);
    let n3 = parseFloat(document.getElementById("inNota3").value);
    let res = document.getElementById("resMedia");
    
    let media = (n1 + n2 + n3) / 3;
    
    if (media >= 7) {
        res.innerHTML = "Média: " + media.toFixed(2) + " - APROVADO";
    } else {
        res.innerHTML = "Média: " + media.toFixed(2) + " - REPROVADO";
    }
}

// 14. Caixa Eletrônico
function funcCaixa() {
    let valor = parseInt(document.getElementById("inCaixa").value);
    let res = document.getElementById("resCaixa");
    
    let n100 = Math.floor(valor / 100); valor %= 100;
    let n50 = Math.floor(valor / 50); valor %= 50;
    let n20 = Math.floor(valor / 20); valor %= 20;
    let n10 = Math.floor(valor / 10); valor %= 10;
    let n5 = Math.floor(valor / 5); valor %= 5;
    let n2 = Math.floor(valor / 2); valor %= 2;
    let n1 = Math.floor(valor / 1);
    
    res.innerHTML = 
        "100: " + n100 + " | 50: " + n50 + "<br>" +
        "20: " + n20 + " | 10: " + n10 + "<br>" +
        "5: " + n5 + " | 2: " + n2 + "<br>" +
        "1: " + n1;
}

// 15. Números Ímpares
function funcImpares() {
    let num = parseInt(document.getElementById("inImpares").value);
    let res = document.getElementById("resImpares");
    let resultado = "";
    
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            resultado += i + " ";
        }
    }
    res.innerHTML = "Ímpares: " + resultado;
}