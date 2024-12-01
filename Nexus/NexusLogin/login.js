document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formLogin");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio do formulário até a validação ser concluída

        // Coleta os valores dos campos
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Validação de campos obrigatórios
        if (!email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Validação do email (simples)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        // Aqui você pode fazer a verificação do login, comparando com um banco de dados, por exemplo
        // Exemplo simples de validação de senha (com valor fixo, apenas para teste)
        if (senha !== "12345") { // Substitua essa parte pela verificação no servidor
            alert("Senha incorreta.");
            return;
        }

        // Se todos os campos estão corretos, envie o formulário ou faça o que precisar
        alert("Login realizado com sucesso!");

        // Limpar os campos do formulário (opcional)
        form.reset();
    });
});
