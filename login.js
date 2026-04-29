document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagem-erro');

    mensagemErro.textContent = '';

    if (email.trim() === '' || senha.trim() === '') {
        mensagemErro.textContent = 'Por favor, preencha todos os campos.';
        return; 
    }

    const emailCorreto = 'teste@gmail.com';
    const senhaCorreta = '1234';

    if (email === emailCorreto && senha === senhaCorreta) {
        window.location.href = 'index.html';
    } else {
        mensagemErro.textContent = 'E-mail ou senha incorretos!';
    }
});