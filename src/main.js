//Node Exprees
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/main'));

app.listen(3030, ()=>{
    console.log('Server on port 3030')
});