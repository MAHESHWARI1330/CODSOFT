const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const taskText = req.body.text;
  if (taskText.trim() !== '') {
    const newTask = { id: Date.now(), text: taskText };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } else {
    res.status(400).json({ error: 'Task text cannot be empty' });
  }
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
