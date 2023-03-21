// you can run a sever without wifi
const express = require('express');
const members = require('./Member');
const path = require('path'); // this is what work with file path.

const app = express();
// the /.. is where the endpoint in on the code for the localhost. Which means that the http address is going to be...
// localhost:5001/...
// app.get('/about', (req, res) => {
// //  res stand for (resort)
// // meaning in what your going to send back on the request side.
// //  res.send('<h1> Hello World!!</h1>')// I csn send HTML or just words.
//     res.sendFile(path.join(__dirname, 'public', 'index.html')) 
//     // public is a folder
//     // index.html is a file 
//     // I can put in the fil of a HTMl Page by using paths and sendFile(), however  it isn't idea b/c I would have to put a / for every one.

 
// });

// This route gets all members array. 
app.get('/api/members' , (req, res) => res.json(members));

// Set static folder
// app.use(express.static(path.join(__dirname,'public')));// w/ this I can have a a lot of HTML Pages that I would like
// index is the home page that the computer will go automatic.

app.use(express.static(path.join(__dirname,'index.html')));

const PORT = process.env.PORT || 5001;

app.listen( PORT , () => console.log(`server started on port ${PORT}`));

// every time that we make a change I you have to run express main app which in this case is index. Which mean I have to run (node index) every time I make a update.
// the  command is: node index
// Something that will continue to watch the server  and to keep updating it is nodemon 
// the command is: npm i -D nodemon (D stands for Damp Dependency)
// after doing that command you need to go (package.json) and add  
// start: "node index"
// dev: "nodemon index"