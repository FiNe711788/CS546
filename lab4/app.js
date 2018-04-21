const todoItems = require("./todo.js");
async function main() {
    try {
        let createTask = await todoItems.createTask("Ponder Dinosaurs",
            "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        let getTask = await todoItems.getAllTasks();
        console.log(getTask);
        console.log();

        createTask = await todoItems.createTask("Play Pokemon with Twitch TV",
            "Should we revive Helix?");
        getTask = await todoItems.getAllTasks();
        console.log(getTask);
        console.log();

        const remove = await todoItems.removeTask(getTask[0]._id);
        getTask = await todoItems.getAllTasks();
        console.log(getTask);
        console.log();

        for (let i in getTask) {
            const complete = await todoItems.completeTask(getTask[i]._id);
        }
        getTask = await todoItems.getAllTasks();
        console.log(getTask);
    } catch (error) {
        throw error;
    }
}

main();