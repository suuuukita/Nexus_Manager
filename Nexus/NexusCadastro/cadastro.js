document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadastro");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio do formulário até que a validação seja realizada

        // Coleta os dados dos campos
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const confSenha = document.getElementById("confSenha").value;
        const cpf = document.getElementById("cpf").value;
        const telefone = document.getElementById("telefone").value;

        // Validação de campos obrigatórios e senha
        if (!email || !senha || !confSenha || !cpf || !telefone) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== confSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        // Máscara de CPF e Telefone
        if (!validarCPF(cpf)) {
            alert("CPF inválido.");
            return;
        }

        if (!validarTelefone(telefone)) {
            alert("Número de telefone inválido.");
            return;
        }

        // Aqui você pode enviar os dados do formulário para o servidor via AJAX ou algo similar

        alert("Cadastro realizado com sucesso!");
        form.reset(); // Limpa o formulário
    });

    // Função para validar o CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cpf.length !== 11) return false;

        // Lógica para validar o CPF (simples para o exemplo)
        const digitos = cpf.split('').map(Number);
        const soma = digitos.slice(0, 9).reduce((acc, num, idx) => acc + num * (10 - idx), 0);
        const resto = (soma * 10) % 11;
        const primeiroDigito = resto === 10 ? 0 : resto;

        const soma2 = digitos.slice(0, 10).reduce((acc, num, idx) => acc + num * (11 - idx), 0);
        const resto2 = (soma2 * 10) % 11;
        const segundoDigito = resto2 === 10 ? 0 : resto2;

        return digitos[9] === primeiroDigito && digitos[10] === segundoDigito;
    }

    // Função para validar o telefone
    function validarTelefone(telefone) {
        telefone = telefone.replace(/\D/g, ''); // Remove caracteres não numéricos
        return telefone.length === 11; // Exemplo: 11 dígitos (DDD + número)
    }

    // Máscara de CPF
    document.getElementById("cpf").addEventListener("input", function (e) {
        let valor = e.target.value.replace(/\D/g, "");
        if (valor.length <= 11) {
            e.target.value = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }
    });

    // Máscara de telefone
    document.getElementById("telefone").addEventListener("input", function (e) {
        let valor = e.target.value.replace(/\D/g, "");
        if (valor.length <= 11) {
            e.target.value = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        }
    });
});
