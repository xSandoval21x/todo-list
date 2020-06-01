const createProject = (projectName) => {
  const projectId = Date.now().toString();
  const name = projectName;
  const todos = [];
  const todoCount = 0;

  return {
    id: projectId,
    name,
    todos,
    todoCount,
  };
};

const createTodo = (todoName, todoDate, todoNotes, todoPriority) => {
  const id = Date.now().toString();
  const name = todoName;
  const date = todoDate;
  const notes = todoNotes;
  const priority = todoPriority;
  const complete = false;
  const important = false;

  return {
    id,
    name,
    date,
    notes,
    priority,
    complete,
    important,
  };
};

export { createProject, createTodo };
