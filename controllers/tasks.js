const Task = require('../models/Task')
const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
        
    } catch (error) {
        res.status(500).json({ msg:error })
    }
    //res.send('get all tasks')
}

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({ msg:error })
        
    }
     
    //res.send('create task')
    
}

const getTask = async (req,res) => {
    try {
        //console.log(req.params)
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if (!task) {
            return res.status(404).json(`msg: No task with ID ${taskID}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg:error })
    }
    //res.send('get single task')
}

const updateTask = (req,res) => {
    res.send('update task')
}

const deleteTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if (!task) {
            return res.status(404).json(`msg: No task with ID ${taskID}`)
        }
        res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({ msg:error })
        
    }
    //res.send('delete task')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}