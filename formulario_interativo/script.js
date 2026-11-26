
const form = document.getElementById("formCadastro");

// Quando o usuário clicar em Cadastrar
form.addEventListener("submit", function(event) {

    // Impede o envio e o recarregamento da página
    event.preventDefault();

    // Pegando os valores digitados nos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    // Lista que vai guardar os erros encontrados
    let erros = [];

    // Verifica se o nome foi preenchido
    if (nome === "") {
        erros.push("• Preencha o campo Nome completo.");
    }

    // Verifica se o e-mail foi preenchido
    if (email === "") {
        erros.push("• Preencha o campo E-mail.");
    } else {
        // Verifica se o formato do e-mail é válido
        const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoEmail.test(email)) {
            erros.push("• Digite um e-mail válido.");
        }
    }

    // Verifica se a idade foi preenchida
    if (idade.trim() === "") {
        erros.push("• Preencha o campo Idade.");
    } else {
        // Transforma a idade em número
        const idadeNumero = Number(idade);

        if (!Number.isFinite(idadeNumero) || idadeNumero < 18) {
    erros.push("• Você precisa ter pelo menos 18 anos para se cadastrar.");
}
    }

    // Verifica se a senha foi preenchida
    if (senha === "") {
        erros.push("• Preencha o campo Senha.");
    } else if (senha.length < 6) {
        erros.push("• A senha deve possuir pelo menos 6 caracteres.");
    }

    // Verifica se a confirmação da senha foi preenchida
    if (confirmarSenha === "") {
        erros.push("• Confirme sua senha.");
    } else if (senha !== confirmarSenha) {
        erros.push("• A confirmação deve ser igual à senha.");
    }

    // Se houver erros, mostra todos em uma lista
    if (erros.length > 0) {
        alert("Encontramos alguns problemas:\n\n" + erros.join("\n"));
    } else {
        // Se não houver erros, mostra a mensagem de sucesso
        alert("Cadastro realizado! Todos os dados estão corretos.");
    }

});
