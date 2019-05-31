//Storage Controller
function Storage(task) {
   
};


//Task Controller
function Task(task, completed = false) {
    this.task = task;
    this.completed = completed;
};

//UI Controller
function UI() {
    this.UISelectors = {
        addBtn: '.addBtn',
        task: '.task',
        tasks: '.tasks'
    };

    //Get input value
    this.getTaskInput = () => {
        return document.querySelector(this.UISelectors.task).value;
    }
};

UI.prototype = {
    populateTasks(task) {
        let output = '';
        output = `<li class="" id="task-1"><input type="checkbox" class="">${task.task}</li>`;

        document.querySelector(this.UISelectors.tasks).innerHTML = output;
    }
}

//App Controller
function App() {
    const ui = new UI();
    this.loadEventListeners = () => {
        //Add task listener
        document.querySelector(ui.UISelectors.addBtn).addEventListener('click', addTasks);

        //Add task
    function addTasks() {
        //Get task from input
        const task = ui.getTaskInput();

        const newTask = new Task(task);

        //Check for task input
        if(task !== ''){
            //Add Task
            ui.populateTasks(newTask);
        }
    }
    }

    
};

App.prototype = {
    init() {

      
        //Load event listeners
        this.loadEventListeners();
    }
};

const app = new App();
app.init();