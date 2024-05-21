document.addEventListener('DOMContentLoaded', () => {
    const orderContainer = document.querySelector('.order');
    const totalAmountSpan = document.getElementById('total-amount');
    const borderOptions = document.querySelectorAll('.recheios span');
    const additionalOptions = document.querySelectorAll('.spadds span');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderOrder() {
        orderContainer.innerHTML = '';
        let totalAmount = 0;

        cart.forEach((item, index) => {
            totalAmount += item.price * item.quantity;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('order-item');
            itemDiv.innerHTML = `
                <h3>${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}</h3>
                <p>Borda: ${item.border ? item.border : 'Nenhum'}</p>
                <p>Adicionais: ${item.additionals ? item.additionals.join(', ') : 'Nenhum'}</p>
            `;
            itemDiv.addEventListener('click', () => editItem(index));
            orderContainer.appendChild(itemDiv);
        });

        totalAmountSpan.innerText = totalAmount.toFixed(2);

        // Aplica a lógica de seleção ao final da renderização
        applySelectionLogic();
    }

    function editItem(index) {
        const item = cart[index];

        borderOptions.forEach(option => {
            option.classList.remove('selected');
            if (item.border && option.innerText === item.border) {
                option.classList.add('selected');
            }
        });

        additionalOptions.forEach(option => {
            option.classList.remove('selected');
            if (item.additionals && item.additionals.includes(option.innerText)) {
                option.classList.add('selected');
            }
        });

        borderOptions.forEach(option => {
            option.onclick = () => {
                borderOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                item.border = option.innerText;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderOrder();
            }
        });

        additionalOptions.forEach(option => {
            option.onclick = () => {
                option.classList.toggle('selected');
                if (!item.additionals) item.additionals = [];
                if (option.classList.contains('selected')) {
                    item.additionals.push(option.innerText);
                } else {
                    item.additionals = item.additionals.filter(add => add !== option.innerText);
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                renderOrder();
            }
        });
    }

    function applySelectionLogic() {
        $(".order-item").off('click').on('click', function(){
            $(".order-item").removeClass("selecionado");
            $(this).addClass("selecionado");
        });
    }

    renderOrder();

    document.getElementById('clear-order').addEventListener('click', () => {
        localStorage.removeItem('cart');
        cart = [];
        renderOrder();
    });
});
