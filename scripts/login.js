document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        fetch('../db.json')
            .then(response => response.json())
            .then(data => {
                const user = data.users.find(user => user.email === email && user.password === password);

                if (user) {
                    alert('Login realizado com sucesso!');
                    window.location.href = '../pages/index.html';
                } else {
                    alert('E-mail ou senha incorretos.');
                }
            });
    });
});
