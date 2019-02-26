const express = require('express');
const router = express.Router();

const Task = require('../models/task')

router.get('/', (req, res) => {
    const task = await Task.find();
    console.log(task);
});

router.post('/add', async (req, res) => {
    // console.log(new Task(req.body));
    // console.log(req.body);

    const task = new Task(req.body);
    await task.save();

    res.send('Recieved');
});

router.get('/delete/:id', async (req, res) => {

    const { id } = req.params;
    Task.remove({_id: id});
    
    // console.log(new Task(req.body));
    // console.log(req.body);

    const task = new Task(req.body);
    await task.save();

    res.send('Recieved');
});

module.exports = router;