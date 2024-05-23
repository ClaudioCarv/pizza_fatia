document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Obter dados de registro do localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Simulação de validação de login
    if (storedUser && email === storedUser.emailOrPhone && password === storedUser.password) {
        alert("Login realizado com sucesso!");
        // Redirecionar para a página principal
        window.location.href = "index.html";
    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }
});
