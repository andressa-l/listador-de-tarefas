// Espera o documento HTML ser carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos HTML que serão usados no código
  const todoListItem = $('#todo-list'); // A lista de tarefas
  const todoListInput = $('#todo-list-input'); // O campo de texto para digitar o item
  const todoListAddBtn = $('.todo-list-add-btn'); // O botão para adicionar o item

  // Adiciona um evento de clique no botão de adicionar
  todoListAddBtn.on('click', function (event) {
    // Previne o comportamento padrão do botão, que é enviar o formulário
    event.preventDefault();

    // Pega o valor do campo de texto e remove os espaços extras
    const item = todoListInput.val().trim();

    // Verifica se o item não está vazio
    if (item) {
      // Cria um elemento HTML para o item da lista, usando template literals
      const listItemHtml = `
              <li>
                  <div class="form-check">
                      <label class="form-check-label">
                          <input class="checkbox" type="checkbox"/>
                          ${item} 
                          <i class="input-helper"></i>
                      </label>
                  </div>
                  <i class="remove mdi mdi-close-circle-outline"></i>
              </li>
          `;

      // Adiciona o elemento HTML ao final da lista de tarefas
      todoListItem.append(listItemHtml);
      // Limpa o campo de texto
      todoListInput.val('');
    }
  });

  // Adiciona um evento de mudança nos checkboxes da lista
  todoListItem.on('change', '.checkbox', function () {
    // Alterna a classe 'completed' no elemento pai mais próximo, que é o <li>
    $(this).closest("li").toggleClass('completed', this.checked);
    // A classe 'completed' faz o texto do item ficar riscado
  });

  // Adiciona um evento de clique nos ícones de remover da lista
  todoListItem.on('click', '.remove', function () {
    // Remove o elemento pai mais próximo, que é o <li>
    $(this).parent().remove();
  });
});