//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigo = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');

    if (input.value == '') {
        alert('Digite um nome');
        return;
    } else {
         amigo.push(input.value);
         input.value = "";
         input.focus();
         atualizarLista();
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = amigo[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    resultado.innerHTML = amigoSorteado;
}