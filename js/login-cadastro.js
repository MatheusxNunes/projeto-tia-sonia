
const FORM_CADASTRAR = document.getElementById("form-cadastrar");

// Só executa se estivermos na página que tem o form-cadastrar
if (FORM_CADASTRAR) {
    FORM_CADASTRAR.addEventListener("submit", function(event) {
        event.preventDefault();

        const usuario = {
            nome: document.getElementById("nome").value,
            sobrenome: document.getElementById("sobrenome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value,
            ddd: document.getElementById("ddd").value,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
            numero: document.getElementById("numero").value,
            cidade: document.getElementById("cidade").value,
            cep: document.getElementById("cep").value,
            dataNascimento: document.getElementById("data-nascimento").value,
            genero: document.getElementById("genero").selectedOptions[0].text
        };

        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));
        alert("Cadastro Realizado com Sucesso!");
        window.location.href = "login.html"; // Vai para o login após cadastrar
    });
}

// --- PARTE DO LOGIN ---
const FORM_LOGAR = document.getElementById("form-logar");

// Só executa se estivermos na página que tem o form-logar
if (FORM_LOGAR) {
    FORM_LOGAR.addEventListener('submit', function(event) {
        event.preventDefault();

        const usuarioCadastrado = localStorage.getItem("usuarioCadastrado");

        if (usuarioCadastrado) {
            const usuarioLogin = JSON.parse(usuarioCadastrado);
            
            var emailDigitado = document.getElementById("email").value;
            var senhaDigitada = document.getElementById("senha").value;

            if (emailDigitado === usuarioLogin.email && senhaDigitada === usuarioLogin.senha) {
                window.alert("Usuário Logado com sucesso!");
                window.location.href = "index.html";
            } else {
                window.alert("Atenção: Usuário ou Senha Incorretos");
            }
        } else {
            window.alert("Nenhum usuário cadastrado encontrado!");
        }
    });
}