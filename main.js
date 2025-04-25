document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tarefa-form');
    const input = document.getElementById('tarefa-input');
    const lista = document.getElementById('tarefa-lista');
    const botaoLimpar = document.getElementById('limpar-lista');

    // Função para atualizar a contagem de tarefas
    function atualizarContagem() {
        const totalPendentes = document.querySelectorAll('#tarefa-lista li:not(.concluida)').length;
        const totalConcluidas = document.querySelectorAll('#tarefa-lista li.concluida').length;

        document.getElementById('tarefas-pendentes').textContent = totalPendentes;
        document.getElementById('tarefas-concluidas').textContent = totalConcluidas;

        if (totalPendentes === 0 && totalConcluidas === 0) {
            botaoLimpar.style.display = 'none';
        } else {
            botaoLimpar.style.display = 'block';
        }
    }

    // Evento para adicionar uma nova tarefa
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const tarefaTexto = input.value.trim();
        if (tarefaTexto === '') return;

        // Cria um novo item de lista
        const li = document.createElement('li');
        li.textContent = tarefaTexto;

        // Cria o botão de exclusão
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.style.marginLeft = '10px';
        botaoExcluir.addEventListener('click', () => {
            lista.removeChild(li);
            atualizarContagem();
        });

        // Cria o botão de marcar como concluído
        const botaoConcluir = document.createElement('button');
        botaoConcluir.textContent = 'Concluir';
        botaoConcluir.style.marginLeft = '10px';
        botaoConcluir.addEventListener('click', () => {
            li.classList.toggle('concluida');
            atualizarContagem();
        });

        // Cria o botão de editar
        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.style.marginLeft = '10px';
        botaoEditar.addEventListener('click', () => {
            const novoTexto = prompt('Edite a tarefa:', li.firstChild.textContent);
            if (novoTexto !== null && novoTexto.trim() !== '') {
                li.firstChild.textContent = novoTexto.trim();
            }
        });

        // Adiciona os botões ao item da lista
        li.appendChild(botaoExcluir);
        li.appendChild(botaoConcluir);
        li.appendChild(botaoEditar);

        // Adiciona o item à lista
        lista.appendChild(li);

        // Limpa o campo de entrada
        input.value = '';

        // Atualiza a contagem de tarefas
        atualizarContagem();
    });

    // Evento para limpar toda a lista
    botaoLimpar.addEventListener('click', () => {
        lista.innerHTML = '';
        atualizarContagem();
    });

    // Atualiza a contagem inicial
    atualizarContagem();
});
