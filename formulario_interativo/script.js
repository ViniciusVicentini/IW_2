
const form = document.getElementById("formCadastro");


form.addEventListener("submit", function(event) {


    event.preventDefault();


    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;


    let erros = [];

  
    if (nome === "") {
        erros.push("• Preencha o campo Nome completo.");
    }


    if (email === "") {
        erros.push("• Preencha o campo E-mail.");
    } else {

        const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoEmail.test(email)) {
            erros.push("• Digite um e-mail válido.");
        }
    }


    if (idade.trim() === "") {
        erros.push("• Preencha o campo Idade.");
    } else {

        const idadeNumero = Number(idade);

        if (!Number.isFinite(idadeNumero) || idadeNumero < 18) {
    erros.push("• Você precisa ter pelo menos 18 anos para se cadastrar.");
}
    }


    if (senha === "") {
        erros.push("• Preencha o campo Senha.");
    } else if (senha.length < 6) {
        erros.push("• A senha deve possuir pelo menos 6 caracteres.");
    }


    if (confirmarSenha === "") {
        erros.push("• Confirme sua senha.");
    } else if (senha !== confirmarSenha) {
        erros.push("• A confirmação deve ser igual à senha.");
    }


    if (erros.length > 0) {
        alert("Encontramos alguns problemas:\n\n" + erros.join("\n"));
    } else {

        alert("Cadastro realizado! Todos os dados estão corretos.");
    }

});
