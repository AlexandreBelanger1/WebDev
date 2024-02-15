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
app.get('/SoftwareProjects.html',(req, res)=>{
    res.sendFile(path.join(__dirname+'/SoftwareProjects.html'));
});
app.get('/Garden.html',(req, res)=>{
    res.sendFile(path.join(__dirname+'/Garden.html'));
});
app.get('/HobbyProjects.html',(req, res)=>{
    res.sendFile(path.join(__dirname+'/HobbyProjects.html'));
});
app.get('/AboutMe.html',(req, res)=>{
    res.sendFile(path.join(__dirname+'/AboutMe.html'));
});
app.get('/GreenHouse.html',(req, res)=>{
    res.sendFile(path.join(__dirname+'/GreenHouse.html'));
});
app.use('/', router);
app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log('Server listening at ' + port);
});