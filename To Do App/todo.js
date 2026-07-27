(function () {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  const todocontainer = document.getElementById('todo');

  const todoinput = document.createElement('input');
  todoinput.type = 'text';
  todoinput.placeholder = 'Enter task...';

  const addbtn = document.createElement('button');
  addbtn.textContent = 'ADD';

  const todolist = document.createElement('div');

  todocontainer.append(todoinput, addbtn, todolist);

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function rendertask(task) {
    const todoitem = document.createElement('div');
    todoitem.className = 'todo-item';

    const p = document.createElement('p');
    p.textContent = task;

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.className = 'delete-btn';

    const editbtn = document.createElement('button');
    editbtn.textContent = 'Edit';

    const completedbtn = document.createElement('button');
    completedbtn.textContent = 'Completed';

    let completed = false;

    completedbtn.addEventListener('click', function () {
      completed = !completed;

      if (completed) {
        p.style.textDecoration = 'line-through';
        p.style.color = 'gray';
      } else {
        p.style.textDecoration = 'none';
        p.style.color = 'black';
      }
    });

    editbtn.addEventListener('click', function () {
      const editinput = document.createElement('input');
      editinput.value = task;

      const savebtn = document.createElement('button');
      savebtn.textContent = 'Save';

      todoitem.prepend(editinput, savebtn);

      savebtn.addEventListener('click', function () {
        const updatedtask = editinput.value;

        if (!updatedtask) {
          return;
        }

        const index = todos.indexOf(task);

        todos[index] = updatedtask;

        saveTodos();

        p.textContent = updatedtask;

        editinput.remove();
        savebtn.remove();
      });
    });

    deletebtn.addEventListener('click', function () {
      const index = todos.indexOf(task);

      todos.splice(index, 1);

      saveTodos();

      todoitem.remove();
    });

    todoitem.append(p, completedbtn, deletebtn, editbtn);

    todolist.prepend(todoitem);
  }

  function addtodo() {
    const task = todoinput.value.trim();

    if (!task) {
      return;
    }

    todos.unshift(task);

    saveTodos();

    rendertask(task);

    todoinput.value = '';
    todoinput.focus();
  }

  todos.forEach(function (task) {
    rendertask(task);
  });

  addbtn.addEventListener('click', addtodo);

  todoinput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addtodo();
    }
  });
})();
