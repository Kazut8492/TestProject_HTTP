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
    if(!req.body.name) {
        return res.status(400).send('Name is required');
    }
    // Database stuff
    res.status(200).send('Thank you for contacting us, ' + req.body.name);
})

app.post('/login', (req, res)=>{
    if(!req.header('x-auth-token')) {
        return res.status(400).send('No token provided');
    }
    if(req.header('x-auth-token') !== '12345') {
        return res.status(401).send('Invalid token');
    }
    res.send('Logged in')
})

app.put('/post/:id', (req, res)=>{
    // Database stuff

    res.json({
        id: req.params.id,
        title:req.body.title
    });
})

app.listen(5001, ()=>console.log('Server started on port 5001'));