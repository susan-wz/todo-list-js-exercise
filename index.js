// Create a new task by creating a new object
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },
    markComplete: function() {
      this.complete = true
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean cat litter", "take the poop out of the cat litter box");
const task2 = newTask("Do laundry", "do the washing and the drying of the dirty clothes");
const tasks = [task1, task2];

console.log(tasks);

task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed
