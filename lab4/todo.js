const uuid = require('uuid/v4');
const mongoCollections = require("./mongoCollections.js");
const todoItems = mongoCollections.todoItems;
module.exports = {
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
}

async function createTask(title, description) {
    if (!title || !description)
        throw "No title or description privided";
    try {
        let newId = uuid();
        let newTask = {
            _id : newId,
            title: title,
            description: description,
            completed: false,
            completedAt: null
        };
        const taskCollection = await todoItems();
        const insertInfo = await taskCollection.insertOne(newTask);
        if (insertInfo.insertedCount === 0)
            throw "Could not add task";
        const task = await this.getTask(newId);
        return task;
    } catch (error) {
        throw error;
    }
}

async function getAllTasks() {
    try {
        const taskCollection = await todoItems();
        const allTasks = await taskCollection.find({}).toArray();
        return allTasks;
    } catch (error) {
        throw error;
    }
}

async function getTask(id) {
    if (!id)
        throw "You must provide an id to search for";
    try {
        const taskCollection = await todoItems();
        const task = await taskCollection.findOne({ _id: id });
        if (task === null)
            throw "No dog with that id";
        return task;
    } catch (error) {
        throw error;
    }
}

async function completeTask(taskId) {
    if (!taskId)
        throw "You must provide an id to search for";
    try {
        const taskCollection = await todoItems();
        const updateInfo = await taskCollection.updateOne({ _id: taskId },
            {
                $set:
                    {
                        completed: true,
                        completedAt: new Date()
                    }
            });
        if (updateInfo.modifiedCount === 0)
            throw "Could not update task successfully";
        return await this.getTask(taskId);
    } catch (error) {
        throw error;
    }
}

async function removeTask(id) {
    if (!id)
        throw "You must provide an id to search for";
    try {
        const taskCollection = await todoItems();
        const deletionInfo = await taskCollection.removeOne({ _id: id });
        if (deletionInfo.deletedCount === 0)
            throw `Could not delete task with id of ${id}`;
    } catch (error) {
        throw error;
    }
}