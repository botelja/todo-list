//Storage Controller
function Storage() {};

//Task Controller
function Task(task, completed = false) {
    this.task = task;
    this.completed = completed;
};

//UI Controller
function UI() {};

//App Controller
function App() {
    this.loadEventListeners = function() {
        console.log('Event');
    }
};

App.prototype = {
    init() {
        this.loadEventListeners();
    }
};

const app = new App();
app.init();