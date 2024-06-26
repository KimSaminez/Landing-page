const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');

document.addEventListener('submit', async function (event) {
    event.preventDefault();

    const usuario = usuarioInput.value;
    const senha = senhaInput.value;

    const usuarioObj = { usuario, senha };

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioObj)
        });

        const data = await response.json();
        console.log(data);
        alert('Usuário logado com sucesso!');
        window.location.href = 'index.html';
    } catch (error) {
        console.error(error);
        alert('Erro ao logar usuário!');
    }
});