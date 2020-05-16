# todo-list
A todo list web app using HTML, CSS and Javascript. Part of the Odin Project Curriculum

### Project Description
* Todo list application that can keep track of things that you have todo!
* Default 'Projects' include: General, Today, and Important
* You can add todo items to your General list for broader tasks
* For items you want to get done today, you can add todos to the Today project
* All todo items have a star button associated with them which can be clicked to mark them as Important
* Any todos you mark as important will be automatically added to the Important project tab
* When adding a todo item, you can add info like a due date, any extra notes, and a priority ranging from low to high
* All todos will default to being a low priority item unless changed
* Todo priority is denoted by a colored bar on the left border of the todo item
* You can add new projects besides the default ones for more specific projects you have in mind

### Project Reflection
* I spent the most time on this project than my other projects due to my experimentation in responsive web design
* I spent a few days on the CSS alone, using media queries to make the navigation bar responsive to smaller width devices
* The javascript relies on updating each project and its todo items, then rendering them on the page whenever a change is made
* This kept the project much more organized and allowed me to work with multiple projects and adding todos to those projects easier
* I am beginning to feel much more comfortable using flex box and quicker at realizing any mistake I have made or why something is not looking the way I want it to
* I used a <template> element which made it very easy to create todo list items by grabbing the elements and simply adding the todo details that are captured through the add todo form
* I kept my project and todo factory functions in their own module which is imported at the beginning of my index.js file
* Got more experience using localStorage and webpack
* Installed date-fns dependency and imported the format and parseISO functions to format the date captured by the add todo form
* Used input[type=date] for simple date input on the form which was a very simple solution
* Overall, I feel good about this project and what I have accomplished
