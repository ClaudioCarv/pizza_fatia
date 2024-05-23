window.onload = function() {
    var numeroPedido = localStorage.getItem('numeroPedido');
    var statusPedido = '';
    var opcaoEntrega = localStorage.getItem('opcaoEntrega'); // Adicionei essa linha para obter a opção de entrega do localStorage

    if (opcaoEntrega === 'Retirado') {
        statusPedido = 'Aguardando Retirada';
    } else if (opcaoEntrega === 'Entregue') {
        statusPedido = 'A caminho';
    }

    document.querySelector('.econtainer span:first-of-type').textContent = 'Pedido #' + numeroPedido;
    document.querySelector('.econtainer span:last-of-type').textContent = 'Status: ' + statusPedido;
}


window.onload = function() {
    var numeroPedido = localStorage.getItem('numeroPedido');
    var opcaoEntrega = localStorage.getItem('opcaoEntrega');
    var statusPedido = '';

    if (opcaoEntrega === 'Retirado') {
        statusPedido = 'Aguardando Retirada';
    } else if (opcaoEntrega === 'Entregue') {
        statusPedido = 'A caminho';
    }

    document.querySelector('.econtainer span:first-of-type').textContent = 'Pedido #' + numeroPedido;
    document.querySelector('.econtainer span:last-of-type').textContent = 'Status: ' + statusPedido;
}

function abrirModal() {
    var modal = document.getElementById('modalAcompanhamento');
    var numeroPedido = localStorage.getItem('numeroPedido');
    var opcaoEntrega = localStorage.getItem('opcaoEntrega');
    var endereco = localStorage.getItem('enderecoEntrega');
    var metodoPagamento = localStorage.getItem('metodoPagamento');

    document.getElementById('pedidoNumero').textContent = 'Pedido #' + numeroPedido;

    if (opcaoEntrega === 'Retirado') {
        document.getElementById('progressoEntrega').style.display = 'none';
        document.getElementById('enderecoEntrega').style.display = 'none';
        document.getElementById('metodoPagamento').style.display = 'none';
        document.getElementById('retirada').style.display = 'block';
    } else {
        document.getElementById('progressoEntrega').style.display = 'block';
        document.getElementById('enderecoEntrega').style.display = 'block';
        document.getElementById('metodoPagamento').style.display = 'block';
        document.getElementById('retirada').style.display = 'none';

        document.getElementById('endereco').textContent = endereco;
        document.getElementById('metodoPagamento').innerHTML = `<h3>Método de pagamento:</h3><p>${metodoPagamento}</p>`;

        var status = document.getElementById('statusEntrega');
        if (opcaoEntrega === 'Entregue') {
            status.textContent = 'Saiu para entrega';
            document.getElementById('confirmado').style.backgroundColor = 'green';
            document.getElementById('line1').style.backgroundColor = 'green';
            document.getElementById('preparo').style.backgroundColor = 'yellow';
            document.getElementById('line2').style.backgroundColor = 'yellow';
            document.getElementById('entrega').style.backgroundColor = 'red';
        }
    }

    modal.style.display = 'block';
}
// Fechar o modal ao clicar fora dele
function fecharModal() {
    var modal = document.getElementById('modalAcompanhamento');
    modal.style.display = 'none';
}


window.onclick = function(event) {
    var modal = document.getElementById('modalAcompanhamento');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
