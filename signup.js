document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Verificar se as senhas são iguais
    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return;
    }

    // armazenamento dos dados de cadastro
    const user = { emailOrPhone, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert("Cadastro realizado com sucesso! Por favor faça o login.");

    // Redirecionar para a página de login
    window.location.href = "login.html";
});
