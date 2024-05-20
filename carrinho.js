
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
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;

    var address = `Rua ${street}, ${number}, ${neighborhood}, ${city}, ${state}, ${zip}`;
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