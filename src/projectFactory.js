const createProject = (projectName) => {
    const projectId = Date.now().toString()
    let name = projectName;
    let todos = [
        {
            name: 'Test',
            date: '01/21/2020',
            notes: '',
            priority: 'high',
            complete: false,
        }
    ];
    let todoCount = 0;

    return {
        id: projectId,
        name: name,
        todos: todos,
        todoCount: todoCount,
    }
}

export default createProject;