const projectsList = document.querySelector('[data-projects]');
let projects = [
    {
        id: 1,
        name: "General",
    },
    {
        id: 2,
        name: "Today",
    },
    {
        id: 3,
        name: "Important",
    },
];

function render() {
    clearElement(projectsList);
    projects.forEach(project => {
        const projectElement = document.createElement('li');
        const projectIcon = document.createElement('ion-icon');
        const projectTitle = document.createElement('span');
        const projectTodoCount = document.createElement('span');

        projectElement.classList.add('nav-item');
        projectElement.dataset.listId = project.id;
        projectIcon.classList.add('nav-icon');
        projectTitle.classList.add('nav-title');
        projectTitle.innerText = project.name;
        projectTodoCount.classList.add('nav-count');
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

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render();