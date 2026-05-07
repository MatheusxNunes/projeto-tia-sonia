const FORM_CADASTRO = document.getElementById("form-cadastrar")

if(FORM_CADASTRO) {

    FORM_CADASTRO.addEventListener("submit", function(event){
        event.preventDefault()

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
            CEP: document.getElementById("CEP").value,
            dataNascimento: document.getElementById("dataNascimento").value,
            genero: document.getElementById("genero").selectedOptions[0].text
        }

        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario))
        alert("Cadastro Realizado com SUCESSO!")
        Window.location.href="login.html"
    })

    const FORM_CADASTRO = document.getElementById("form-logar")

    if(FORM_LOGAR){

        FORM_LOGAR.addEventListener("submit", function(event){

            const usuarioCadastrado = localStorage.getItem("usuarioCadastrado")

            if(usuarioCadastrado){
                const usuarioEncontrado = JSON.parse(usuarioCadastrado)

                var emailDigitado = document.getElementById("email").value
                var semhaDigitada = document.getElementById("senha").value

                if( emailDigitado == usuarioEncontrado.email && senhaDigitada == usuarioEncontrado.senha)
                alert("Usuario logado com sucesso")
                window.location.href = "index.html"
                } else{
                alert("ATENÇÃO: Email ou Senha Incorretos")
            }
                else{
                alert("nenhum usuario cadastrado encontrado")
            }
        })

    }

}