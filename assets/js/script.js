
/*
function botaoFechar(li) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  span.onclick = () => (span.parentElement.style.display = "none");
}

document.querySelectorAll("li").forEach(botaoFechar);

document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") e.target.classList.toggle("checked");
});

function addTarefa() {
  let li = document.createElement("LI");
  let tarefa = document.form_main.task.value;
  let caixaTarefa = document.createTextNode(tarefa);

  li.appendChild(caixaTarefa); //Texto foi criado e entra como lista
  document.querySelector("ul").appendChild(li); // Essa lista desordenada vai receber o elemento filho
  document.form_main.task.value = ""; //Após limpa o input

  botaoFechar(li); //chama novamente a função
}
*/


$(document).ready(function() {
  const todoListItem = $('#todo-list');
  const todoListInput = $('#todo-list-input');
  const todoListAddBtn = $('.todo-list-add-btn');

  todoListAddBtn.on('click', function(event) {
      event.preventDefault();

      const item = todoListInput.val().trim();

      if (item) {
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

          todoListItem.append(listItemHtml);
          todoListInput.val('');
      }
  });

  todoListItem.on('change', '.checkbox', function() {
      $(this).closest("li").toggleClass('completed', this.checked);
  });

  todoListItem.on('click', '.remove', function() {
      $(this).parent().remove();
  });
});