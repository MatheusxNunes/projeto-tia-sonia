//verificar se o usuario esta logado
const usuarioLogado = localStorage.getItem('usuarioCadastro')

//se não estiver logado é direcionado a página de login

if (!usuarioLogado) {
    document.innerHTML =
        '<div class="container text-center mt-5" >' +
        '<h2 class="text-danger"><i class="fa-solid fa-lock"></i> Acesso negado</h2>' +
        '<p class="mb-4">Você precisa estar logado</p>' +
        '<p class="text-muted"> Aguarde...</p>' +
        '</div>'

    setTimeout(() => {
        window.location.href = 'login.html'
    }, 2500)
} else {
    //Reunindo as informações
    const carrinho = JSON.parse(localStorage.getItem('itemCarrinho')) || []
    const listaProdutoHTML = document.getElementById('lista-produtos')
    const textTotal = document.getElementById('texto-total')
    let valorTotal = 0
    let textoPedidoEmail = 'Olá, gostaria de fazer um pedido:\n\n'

    //Vamos  verificar se o carrinho esta vazio
    if (carrinho.length === 0) {
        listaProdutoHTML.innerHTML =
            '<tr>' +
            '<td colpan="2" class="text-center">Seu carrinho está vazio.</td>'
        '</tr>'
    } else {
        //Cada item do carrinho é exibido na tabela
        carrinho, forEarch(function (item) {
            listaProdutoHTML.innerHTML +=
                '<tr>'
            '<td>' + item.nome + '</td>' +
                '<td> R$' + item.preco + '</td>'
            '</tr>'

            //somar o valor total
            valorTotal + parseFloat(item.preco)

            //Colocando os itens no e-mail
            textoPedidoEmail += '-' + 'item.nome+ :R$ ' + item.preco + '\n'
        })

        textTotal.innerText = 'Total: R$' + valorTotal
        textoPedidoEmail += '\nValor Total: R$' + valorTotal

    //Finalizar o pedido por gmail
    const btnFinalizar = document.getElementById('btn-finalizar')

    btnFinalizar.addEventListener('click', function () {
        event.preventDefault()

        if (carrinho.length === 0)
            const textOriginal = btnFinalizar.innerText
        btnFinalizar.innerText = 'O carrinho está vazio!'
        btnFinalizar.classList.replace('btn-success', 'btn-danger')

        setTimeout(() => {
            btnFinalizar.innerText = textOriginal
            btnFinalizar.classList.replace('btn-danger', 'btn-success')
        }, 2000)

return
    
    btnFinalizar.innerText = 'Preparando pedido ...'
    btnFinalizar.classList.replace('btn-succes', 'btn-secondary')

    const cliente = JSON.parse(usuarioLogado)
    textoPedidoEmail += '\n\nDAdos do Cliente:\nNome: ' + cliente.nome + '\nE-mail: ' + cliente.telefone

    const emailTiaSonia = 'seu@email.com'
    const assunto = 'Novo Pedido de ' + cliente.nome

    const linkEmail = 'https://maill.google.com/email/?view=cm'

    window.open(linkEmail, 'blank')

    localStorage.removeItem('itemCarrinho')

    setTimeout(() => {
        window.location.href = 'index.html'
    }, 1500)
      })
    }
}
