const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res)=>{
//     // res.send('Hello World from Kazuki');
//     // res.send('<h1>Hello World from Kazuki</h1>');
//     // res.json({msg: 'Hello World from Kazuki'});
//     res.send(req.header('host'));
// })

app.post('/contact', (req, res)=>{
    res.send(req.body.name);
})

app.listen(5001, ()=>console.log('Server started on port 5001'));