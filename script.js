/* tela de carregamento inicial */
setTimeout(function(){
    document.getElementById('loader').classList.add('hide');
    document.body.style.overflow = 'auto';
}, 2000);


/* função para adicionar o produto na tela de pedido */
function addToCart(name, price) {
    var confirmacao = confirm("Deseja Adicionar ao seu pedido ?");
    if (confirmacao) {
        alert("Adicionado!");
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        let existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.price += price;
        } else {
            cart.push({ name: name, price: price, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(JSON.parse(localStorage.getItem('cart')));
    }
}
