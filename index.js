const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.send('Send!');
})

app.get('/example', (req,res) => {
    res.json('Example');
} )

app.listen(4000,() => {
    console.log('Boo yeah😜 ... Listening on port 4000');
})