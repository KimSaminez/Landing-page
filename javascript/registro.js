const nomeInput = document.getElementById('nome');
const usuarioInput = document.getElementById('usuario');
const dataInput = document.getElementById('data');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const localInput = document.getElementById('local');
const profissaoSelect = document.getElementById('profissao');

document.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = nomeInput.value;
    const usuario = usuarioInput.value;
    const data = dataInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;
    const local = localInput.value;
    const profissao = profissaoSelect.value;

    const usuarioObj = { nome, usuario, data, email, senha, localizacao: { "localidade": local }, tipoUsuario: { "profissao": profissao } };

    fetch('/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarioObj)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            alert('Usuário cadastrado com sucesso!');
            window.location.href = 'login.html';
        })
        .catch(function (error) {
            console.error(error);
            alert('Erro ao cadastrar usuário!');
        });
});