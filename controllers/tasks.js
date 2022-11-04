const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const getAllTasks = asyncWrapper(async (req,res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
        // res.status(200).json({tasks,amount:tasks.length})
        // res.status(200).json({status:"success",data:{tasks,nbHits:tasks.length}})
        
        //res.send('get all tasks')
})

const createTask = asyncWrapper(async (req,res) => {
    
        const task = await Task.create(req.body)
        res.status(201).json({task})
         
    //res.send('create task')
    
})

const getTask = asyncWrapper(async (req,res) => {
    
        //console.log(req.params)
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if (!task) {
            return res.status(404).json(`msg: No task with ID ${taskID}`)
        }
        res.status(200).json(task)
    
    //res.send('get single task')
})

const updateTask = asyncWrapper(async (req,res) => {
    
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return res.status(404).json(`msg: No task with ID ${taskID}`)
        }
        res.status(200).json({task})
        
    
    //res.send('update task')
})

const deleteTask = asyncWrapper(async (req,res) => {
    
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if (!task) {
            return res.status(404).json(`msg: No task with ID ${taskID}`)
        }
        res.status(200).json({task})
        
        //res.send('delete task')
})


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}