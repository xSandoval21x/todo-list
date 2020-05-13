const createProject = (projectName) => {
    const projectId = Date.now().toString();
    let name = projectName;
    let todos = [];
    let todoCount = 0;

    return {
        id: projectId,
        name: name,
        todos: todos,
        todoCount: todoCount,
    }
}

const createTodo = (todoName, todoDate, todoNotes, todoPriority) => {
    const id = Date.now().toString();
    let name = todoName;
    let date = todoDate;
    let notes = todoNotes;
    let priority = todoPriority;
    let complete = false;

    return {
        id,
        name,
        date,
        notes,
        priority,
        complete,
    }
}

export {createProject, createTodo};