document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let orderSummary = document.querySelector('.order');
    let totalAmount = 0;

    cart.forEach(item => {
        if (item.name && item.price) {
            let itemDiv = document.createElement('div');
            itemDiv.className = 'order-item';
            itemDiv.innerHTML = `<p>${item.name} (${item.quantity}) - R$${item.price}</p>`;
            orderSummary.appendChild(itemDiv);
            totalAmount += item.price;
        }
    });

    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);

    document.getElementById('clear-order').addEventListener('click', () => {
        localStorage.removeItem('cart'); 
        orderSummary.innerHTML = ''; 
        document.getElementById('total-amount').innerText = '0.00';
    });
});
