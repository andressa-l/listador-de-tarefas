
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

(function($) {
    'use strict';
    $(function() {
      var todoListItem = $('.todo-list');
      var todoListInput = $('.todo-list-input');
      $('.todo-list-add-btn').on("click", function(event) {
        event.preventDefault();
  
        var item = $(this).prevAll('.todo-list-input').val();
  
        if (item) {
          todoListItem.append("<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox'/>" + item + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>");
          todoListInput.val("");
        }
  
      });
  
      todoListItem.on('change', '.checkbox', function() {
        if ($(this).attr('checked')) {
          $(this).removeAttr('checked');
        } else {
          $(this).attr('checked', 'checked');
        }
  
        $(this).closest("li").toggleClass('completed');
  
      });
  
      todoListItem.on('click', '.remove', function() {
        $(this).parent().remove();
      });
  
    });
  })(jQuery);