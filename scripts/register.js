document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.register-form form');
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('As senhas não correspondem.');
            return;
        }

        if (!validateEmail(emailInput.value)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        fetch('../db.json')
            .then(response => response.json())
            .then(data => {
                const userExists = data.users.find(user => user.email === newUser.email);

                if (userExists) {
                    alert('Este e-mail já está cadastrado.');
                } else {
                    data.users.push(newUser);
                    console.log('User registered (simulation):', data.users);
                    alert('Cadastro realizado com sucesso!');
                    window.location.href = '../pages/login.html';
                }
            });
    });

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
