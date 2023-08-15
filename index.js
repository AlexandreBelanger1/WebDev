const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();

// sendFile will go here
app.use(express.static('public'));
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/index.html',(req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/contact.html',(req, res)=>{
    res.sendFile(path.join(__dirname+'/contact.html'));
});
app.get('/Resume.html',(req, res)=>{
    res.sendFile(path.join(__dirname+'/Resume.html'));
});

app.use('/', router);
app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log('Server listening at ' + port);
});