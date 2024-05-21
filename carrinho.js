function validateCardNumber(input) {
    // Remove qualquer caractere que não seja número e limita a 16 caracteres
    input.value = input.value.replace(/\D/g, '').substring(0, 16);
}

function validateCardExpiry(input) {
    // Remove qualquer caractere que não seja número ou barra
    input.value = input.value.replace(/[^\d\/]/g, '');
    
    if (input.value.length === 2 && !input.value.includes('/')) {
        input.value = input.value + '/';
    }
    if (input.value.length > 5) {
        input.value = input.value.substring(0, 5);
    }
}
// Remove qualquer caractere que não seja número e limita a 3 caracteres
function validateCardCVV(input) {
    
    input.value = input.value.replace(/\D/g, '').substring(0, 3);
}
// Remove qualquer caractere que não seja número e limita ao comprimento máximo
function validateNumber(input, maxLength) {
    
    input.value = input.value.replace(/\D/g, '').substring(0, maxLength);
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function saveAddress() {
    var street = document.getElementById('street').value;
    var number = document.getElementById('number').value;
    var neighborhood = document.getElementById('neighborhood').value;
    var city = document.getElementById('city').value;
    var zip = document.getElementById('zip').value;

    var address = `Rua ${street}, ${number}, ${neighborhood}, ${city}, ${zip}`;
    document.getElementById('addressDisplay').innerHTML = `<p><strong>Endereço</strong></p><p>${address}</p><span class="edit">Editar</span>`;
    closeModal('addressModal');
}

function savePayment() {
    var paymentMethods = document.getElementsByName('payment');
    var selectedPayment;
    for (var i = 0; i < paymentMethods.length; i++) {
        if (paymentMethods[i].checked) {
            selectedPayment = paymentMethods[i].value;
        }
    }
    if (selectedPayment === 'card') {
        var cardNumber = document.getElementById('cardNumber').value;
        var cardName = document.getElementById('cardName').value;
        var cardExpiry = document.getElementById('cardExpiry').value;
        var cardCVV = document.getElementById('cardCVV').value;

        var maskedCardNumber = cardNumber.replace(/\d(?=\d{4})/g, '*');

        document.getElementById('paymentDisplay').innerHTML = `
            <p><strong>Cartão de Crédito</strong></p>
            <p>${cardName}</p>
            <p>${maskedCardNumber}</p>
            <span class="change">trocar</span>
        `;
    } else {
        document.getElementById('paymentDisplay').innerHTML = `
            <p><strong>PIX</strong></p>
            <p>QR Code Fictício</p>
            <span class="change">trocar</span>
        `;
    }
    closeModal('paymentModal');
}

function showPaymentFields() {
    var paymentMethods = document.getElementsByName('payment');
    var selectedPayment;
    for (var i = 0; i < paymentMethods.length; i++) {
        if (paymentMethods[i].checked) {
            selectedPayment = paymentMethods[i].value;
        }
    }

    document.getElementById('cardFields').style.display = selectedPayment === 'card' ? 'block' : 'none';
    document.getElementById('pixQRCode').style.display = selectedPayment === 'pix' ? 'block' : 'none';
}

function selecionarSpan(span) {
    var spans = document.querySelectorAll('.cpedido span'); 
    spans.forEach(function(item) {
        item.classList.remove('cselecionado'); 
    });
    span.classList.add('cselecionado'); 
}

function finalizarPedido() {
    var opcaoEntrega = document.querySelector('.cpedido .cselecionado');
    var statusPedido = '';
    var numeroPedido = Math.floor(Math.random() * 1000000); // Número aleatório de 6 dígitos

    if (opcaoEntrega.textContent === 'Retirado') {
        statusPedido = 'Aguardando Retirada';
    } else if (opcaoEntrega.textContent === 'Entregue') {
        statusPedido = 'A caminho';
    }

    // Obter endereço e método de pagamento
    var endereco = document.querySelector('#addressDisplay p:nth-of-type(2)').textContent;
    var metodoPagamento = document.querySelector('#paymentDisplay p:nth-of-type(1)').textContent + ' - ' + document.querySelector('#paymentDisplay p:nth-of-type(2)').textContent;

    // Salvar informações no localStorage
    localStorage.setItem('numeroPedido', numeroPedido);
    localStorage.setItem('opcaoEntrega', opcaoEntrega.textContent);
    localStorage.setItem('enderecoEntrega', endereco);
    localStorage.setItem('metodoPagamento', metodoPagamento);

    // Redirecionar para a página de entregas
    window.location.href = 'entregas.html';
}


