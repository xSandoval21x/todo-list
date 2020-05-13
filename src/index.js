import {format, parseISO} from 'date-fns';
import {createProject, createTodo} from './factoryFunctions';

const projectsList = document.querySelector('[data-projects]');
const addProjectForm = document.querySelector('[data-new-project-form]');
const addProjectInput = document.querySelector('[data-new-project-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');
const listTitle = document.querySelector('[data-list-title]');
const listItems = document.querySelector('[data-list-items]');
const itemTemplate = document.getElementById('item-template');
const formContainer = document.querySelector('[data-item-form-container]');
const addTodoButton = document.querySelector('[data-add-todo-button]');
const submitTodoButton = document.querySelector('[data-submit-todo-form]');
const closeFormButton = document.querySelector('[data-close-form]');

const LOCAL_STORAGE_PROJECTS_KEY = 'todo.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID = 'todo.selectedProjectId';
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) ||
[
    {
        id: 1,
        name: "General",
        todos: [],
        todoCount: 0,
        default: true,
    },
    {
        id: 2,
        name: "Today",
        todos: [],
        todoCount: 0,
        default:true,
    },
    {
        id: 3,
        name: "Important",
        todos: [],
        todoCount: 0,
        default: true,
    },
];
let selectedProjectId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID)) || 1;


projectsList.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li') {
        selectedProjectId = e.target.dataset.projectId;
    } else if (e.target.parentElement.tagName.toLowerCase() === 'li') {
        selectedProjectId = e.target.parentElement.dataset.projectId;
    }
    
    save();
    render();
});
addProjectForm.addEventListener('submit', e => {
    e.preventDefault();
    const projectName = addProjectInput.value;
    if(projectName == null || projectName === '') return;
    const project = createProject(projectName);
    addProjectInput.value = null;
    projects.push(project);
    save();
    render();
});
deleteListButton.addEventListener('click', e => {
    projects = projects.filter(project => project.id !== selectedProjectId);
    selectedProjectId = 1;
    render();
    save();
})
addTodoButton.addEventListener('click', () => {
    formContainer.classList.add('show');
});
submitTodoButton.addEventListener('click', () => {
    let todoTitleInput = document.getElementById('todo-title');
    let todoDateInput = document.getElementById('todo-date');
    let todoNotesInput = document.getElementById('todo-notes');
    let todoPriority;
    const priorityRadioButtons = document.querySelectorAll('input[type=radio]');
    priorityRadioButtons.forEach(button => {
        if(button.checked) {
            //set label text as priority value
            todoPriority = button.nextElementSibling.innerText;
        }
    });
    const selectedProject = projects.find(project => project.id == selectedProjectId);
    const todoObject = createTodo(todoTitleInput.value,
        todoDateInput.value,
        todoNotesInput.value,
        todoPriority);
    selectedProject.todos.push(todoObject);
    todoTitleInput.value = null;
    todoDateInput.value = null;
    todoNotesInput.value = null;
    priorityRadioButtons[0].checked = true;
    hideForm();
    //save and then render
    save();
    render();
});
closeFormButton.addEventListener('click', hideForm);

function hideForm() {
    formContainer.classList.remove('show');
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID, JSON.stringify(selectedProjectId));
}

function render() {
    clearElement(projectsList);
    renderProjects();
    renderProjectItems();
}

function renderProjects() {
    projects.forEach(project => {
        const projectElement = document.createElement('li');
        const projectIcon = document.createElement('ion-icon');
        const projectTitle = document.createElement('span');
        const projectTodoCount = document.createElement('span');
    
        projectElement.classList.add('nav-item');
        projectElement.dataset.projectId = project.id;
        projectIcon.classList.add('nav-icon');
        projectTitle.classList.add('nav-title');
        projectTitle.innerText = project.name;
        projectTodoCount.classList.add('nav-count');
    
        if(project.id == selectedProjectId) {
            setTimeout( () => {
                projectElement.classList.add('active-project');
            }, 1);
        }
        
        switch(project.id) {
            case 1:
                projectIcon.name = 'albums-outline';
                break;
            case 2:
                projectIcon.name = 'calendar-outline';
                break;
            case 3:
                projectIcon.name = 'star-outline';
                break;
            default:
                projectIcon.name = 'clipboard-outline';
        };
    
        projectElement.appendChild(projectIcon);
        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectTodoCount);
        projectsList.appendChild(projectElement);
    });
}

function renderProjectItems() {
    //if there is no selected project, default to General
    if(selectedProjectId == null) {
        selectedProjectId = 1;
    }
    const selectedProject = projects.find(project => project.id == selectedProjectId);
    listTitle.innerText= selectedProject.name;

    if(selectedProject.default) {
        deleteListButton.style.display = 'none';
    }else {
        deleteListButton.style.display = '';
    }

    clearElement(listItems);
    selectedProject.todos.forEach(todo => {
        const itemElement = document.importNode(itemTemplate.content, true);
        const listElement = itemElement.querySelector('[data-item]');
        const itemName = itemElement.querySelector('[data-item-name]');
        const itemDate = itemElement.querySelector('[data-item-date]');
        const completeItemButton = itemElement.querySelector('[data-complete-item]');
        const importantItemButton = itemElement.querySelector('[data-important-item]');
        const deleteItemButton = itemElement.querySelector('[data-delete-item]');

        listElement.dataset.itemId = todo.id;
        itemName.innerText = todo.name;
        itemDate.innerText = todo.date === ''? '' : format(parseISO(todo.date), 'PPP');
        switch(todo.priority) {
            case 'Low':
                listElement.classList.add('priority-low');
                break;
            case 'Medium':
                listElement.classList.add('priority-medium');
                break;
            case 'High':
                listElement.classList.add('priority-high');
                break;
        }

        if(todo.complete) {
            completeItemButton.classList.add('completed');
            listElement.classList.add('completed');
        }

        if(todo.important) {
            /*const importantProject = projects.find(project => project.id == 3);
            importantProject.todos.push(todo);*/
            importantItemButton.name = 'star';
        }
        //item action event listeners
        completeItemButton.addEventListener('click', () => {
            todo.complete = !todo.complete;
            save();
            render();
        });
        importantItemButton.addEventListener('click', () => {
            todo.important = !todo.important;
            save();
            render();
        });
        deleteItemButton.addEventListener('click', () => {
            //add function
        });
        

        listItems.appendChild(listElement);
    });
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


render();