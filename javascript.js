document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tarefa-form');
    const input = document.getElementById('tarefa-input');
    const lista = document.getElementById('tarefa-lista');
    const botaoLimpar = document.getElementById('limpar-lista');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const tarefaTexto = input.value.trim();
    if (tarefaTexto === '') return;

    // Cria um novo item de lista
    const li = document.createElement('li');
    li.textContent = tarefaTexto;

    // Cria o botão de excluir
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.style.marginLeft = '10px';
    botaoExcluir.addEventListener('click', () => {
        lista.removeChild(li);
        verificarListaVazia();
    });

    // Adiciona o botão ao item da lista
    li.appendChild(botaoExcluir);

    // Adiciona o item à lista
    lista.appendChild(li);

    // Exibe o botão "Limpar Lista"
    botaoLimpar.style.display = 'block';

    // Limpa o campo de entrada
    input.value = '';
});