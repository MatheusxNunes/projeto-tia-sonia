//verificar se o usuario esta logado
const usuarioLogado = localStorage.getItem('usuarioCadastro')

//se não estiver logado é direcionado a página de login

if (!usuarioLogado) {
    'document.innerHTML = '
    '<div class="container text-center mt-5" >' +
        '<h2 class="text-danger"><i class="fa-solid fa-lock"></i> Acesso negado</h2>' +
        '<p class= "mb-4">Você precisa estar logado.</p>' +
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
    let textoPedidoEmail = 'Ola gostaria de fazer um pedido:/n/n'

    //Vamos  verificar se o carrinho esta vazio
    if (carrinho.length === 0) {
        listaProdutoHTML.innerHTML =
            '<tr>'
    } else {
        carrinho, forEarch(function (item) {
            listaProdutoHTML.innerHTML +=
            '<tr>'
                '<td>' + item.nome + '</td>' +
                '<td>' + item.preco + '</td>'
            '</tr>'

            //somar o valor total
            valorTotal + parseFloat(item.preco)

            //Colocando os itens no e-mail
            textoPedidoEmail += '-' + ' : R$ ' + item.preco + '\n'
        })

        textTotal.innerText = 'Total: ' + valorTotal
        textoPedidoEmail += '\nValor Total: R$ ' + valorTotal
    }
}