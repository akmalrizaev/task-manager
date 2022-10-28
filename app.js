const express = require('express');
const app = express();

// Route
app.get('/hello', (req,res)=> {
    res.send('Task Manager APP')
})

const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`))

